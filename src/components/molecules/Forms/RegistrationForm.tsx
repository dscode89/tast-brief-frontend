import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { countryDialCodes } from "../../../mock-data/countryDialCodes";
import { dateOfBirthOptions } from "../../../mock-data/dateOfBirthOptions";
import { HeadingQuarternary } from "../../atoms/Typography/HeadingQuarternary";
import { FormLink } from "../../styled/Forms/FormLink";
import React, { FormEvent, SetStateAction, useState } from "react";
import { VerticalFormWrapper } from "../../styled/Forms/VerticalFormWrapper";
import { SelectDropDown } from "./SelectDropDown";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { FormErrorContainer } from "../Errors/FormErrorContainer";
import { InputFieldIconWrapper } from "../../styled/Forms/Inputs/InputFieldIconWrapper";
import regexPatterns from "../../../utils/regexPatterns";
import { InputWithLabel } from "./InputWithLabel";
import { ErrorMessage } from "../../atoms/Errors/ErrorMessage";

export interface SignInFormProps {
  setIsLogin: React.Dispatch<SetStateAction<boolean>>;
  setStartAnimation?: React.Dispatch<SetStateAction<boolean>>;
  setShowModal?: React.Dispatch<SetStateAction<boolean>>;
  startAnimation?: boolean;
  showModal?: boolean;
}

export const RegistrationForm = ({
  setIsLogin,
  setShowModal,
}: SignInFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLogin(true);
  };

  const handleRegistrationFormChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const specificInput = e.target.id.split("-")[1];
    const specificRegex =
      specificInput === "password" || specificInput === "email"
        ? specificInput
        : "fullName";

    setFormFields((current) => {
      return {
        ...current,
        [specificInput]: {
          isActive: e.target.value ? true : false,
          value: e.target.value,
          isValid: regexPatterns[specificRegex].test(e.target.value),
        },
      };
    });
  };

  const [formFields, setFormFields] = useState({
    fullName: { value: "", isActive: false, isValid: false },
    password: { value: "", isActive: false, isValid: false },
    email: { value: "", isActive: false, isValid: false },
    dob: { value: "", isActive: false, isValid: false },
    phoneNumber: { value: "", isActive: false, isValid: false },
    company: { value: "", isActive: false, isValid: false },
    role: { value: "", isActive: false, isValid: false },
    jobTitle: { value: "", isActive: false, isValid: false },
  });

  return (
    <ContentCenteredColumn
      $shouldAnimate={true}
      $animateDirection="up"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <VerticalFormWrapper onSubmit={handleSubmit}>
        <HeadingTertiary fontSizeRem={1.3} color="">
          Let's get set up!
        </HeadingTertiary>

        <InputWithLabel
          inputId="reg-fullName"
          labelFor="reg-fullName"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.fullName.isActive}
          isValid={formFields.fullName.isValid}
          labelText="Full Name"
        >
          {formFields.fullName.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.fullName.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>
        {!formFields.fullName.isValid && formFields.fullName.isActive ? (
          <ErrorMessage>Must contain letters if filled</ErrorMessage>
        ) : null}

        {/* <InputWithLabel
          inputId="reg-lastName"
          labelFor="reg-lastName"
          onChange={handleRegistrationFormChange}
          isActive={formFields.lastName.isActive}
          isValid={formFields.lastName.isValid}
          labelText="Last Name"
        >
          {formFields.lastName.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null}
        </InputWithLabel> */}

        <InputWithLabel
          inputId="reg-password"
          labelFor="reg-password"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.password.isActive}
          isValid={formFields.password.isValid}
          labelText="Password"
        >
          {/* {formFields.password.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null} */}
        </InputWithLabel>

        <InputWithLabel
          inputId="reg-email"
          labelFor="reg-email"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.email.isActive}
          isValid={formFields.email.isValid}
          labelText="Email"
        >
          {/* {formFields.email.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null} */}
        </InputWithLabel>

        {/* <InputFieldWrapper>
          <BorderBottomTextInput
            onChange={handleRegistrationFormChange}
            placeholder="Enter Firstname..."
            id="reg-firstName"
            value={formFields.firstName.value}
            $isActive={formFields.firstName.isActive}
            $isValid={formFields.firstName.isValid}
          />

          {formFields.firstName.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null}
        </InputFieldWrapper>
        {!formFields.firstName.isValid && formFields.firstName.isActive ? (
          <FormErrorContainer>
            Must start with a letter and only contain letters and '-'. Minimum
            of 2 chars.
          </FormErrorContainer>
        ) : null} */}

        {/* <InputFieldWrapper>
          <BorderBottomTextInput
            onChange={handleRegistrationFormChange}
            placeholder="Enter Lastname..."
            id="reg-lastName"
            value={formFields.lastName.value}
            $isActive={formFields.lastName.isActive}
            $isValid={formFields.lastName.isValid}
          />

          {formFields.lastName.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null}
        </InputFieldWrapper>
        {!formFields.lastName.isValid && formFields.lastName.isActive ? (
          <FormErrorContainer>
            Must start with a letter and only contain letters and '-'. Minimum
            of 2 chars.
          </FormErrorContainer>
        ) : null} */}

        {/* <InputFieldWrapper>
          <BorderBottomTextInput
            onChange={handleRegistrationFormChange}
            type="password"
            placeholder="Enter Password..."
            id="reg-password"
            value={formFields.password.value}
            $isActive={formFields.password.isActive}
            $isValid={formFields.password.isValid}
          />

          {formFields.password.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null}
        </InputFieldWrapper>
        {!formFields.password.isValid && formFields.password.isActive ? (
          <FormErrorContainer>
            Password must contain at least: 1 number(0-9), 1 uppercase letter, 1
            special character and be between 8 and 12 chars long.
          </FormErrorContainer>
        ) : null} */}

        {/* <InputFieldWrapper>
          <BorderBottomTextInput
            onChange={handleRegistrationFormChange}
            placeholder="Enter Email..."
            id="reg-email"
            value={formFields.email.value}
            $isActive={formFields.email.isActive}
            $isValid={formFields.email.isValid}
          />

          {formFields.email.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null}
        </InputFieldWrapper>
        {!formFields.email.isValid && formFields.email.isActive ? (
          <FormErrorContainer>Invalid Email Format!</FormErrorContainer>
        ) : null} */}

        <PhoneNumberInput countryDialCodes={countryDialCodes} />

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            position: "relative",
            margin: "25px 5px",
          }}
        >
          <HeadingQuarternary fontSizeRem={0.7} color="#000000">
            Date Of Birth - DD/MM/YYYY
          </HeadingQuarternary>
          <div style={{ display: "flex" }}>
            <SelectDropDown
              dropDownName="date"
              options={dateOfBirthOptions.days}
              optionText="day"
              optionValue="day"
            />
            <SelectDropDown
              dropDownName="month"
              options={dateOfBirthOptions.months}
              optionText="month"
              optionValue="month"
            />

            <SelectDropDown
              dropDownName="date"
              options={dateOfBirthOptions.years}
              optionText="year"
              optionValue="year"
            />
          </div>
        </div>

        <InputWithLabel
          inputId="reg-company"
          labelFor="reg-company"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.company.isActive}
          isValid={formFields.company.isValid}
          labelText="Company"
        >
          {formFields.company.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.company.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>

        <InputWithLabel
          inputId="reg-jobTitle"
          labelFor="reg-jobTitle"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.jobTitle.isActive}
          isValid={formFields.jobTitle.isValid}
          labelText="Job Title"
        >
          {formFields.jobTitle.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.jobTitle.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>

        <InputWithLabel
          inputId="reg-role"
          labelFor="reg-role"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.role.isActive}
          isValid={formFields.role.isValid}
          labelText="Role"
        >
          {formFields.role.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.role.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>
        {/* <InputFieldWrapper>
          <BorderBottomTextInput
            onChange={handleRegistrationFormChange}
            placeholder="Enter Company..."
            id="reg-company"
            value={formFields.company.value}
            $isActive={formFields.company.isActive}
            $isValid={formFields.company.isValid}
          />

          {formFields.company.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null}
        </InputFieldWrapper>
        {!formFields.company.isValid && formFields.company.isActive ? (
          <FormErrorContainer>
            Must start with a letter and only contain letters and '-'. Minimum
            of 2 chars.
          </FormErrorContainer>
        ) : null} */}

        {/* <InputFieldWrapper>
          <BorderBottomTextInput
            onChange={handleRegistrationFormChange}
            placeholder="Enter Role..."
            id="reg-role"
            value={formFields.role.value}
            $isActive={formFields.role.isActive}
            $isValid={formFields.role.isValid}
          />

          {formFields.role.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null}
        </InputFieldWrapper>
        {!formFields.role.isValid && formFields.role.isActive ? (
          <FormErrorContainer>
            Must start with a letter and only contain letters and '-'. Minimum
            of 2 chars.
          </FormErrorContainer>
        ) : null} */}
        {/* <InputFieldWrapper>
          <BorderBottomTextInput
            onChange={handleRegistrationFormChange}
            placeholder="Enter Job Title..."
            id="reg-jobTitle"
            value={formFields.jobTitle.value}
            $isActive={formFields.jobTitle.isActive}
            $isValid={formFields.jobTitle.isValid}
          />

          {formFields.jobTitle.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null}
        </InputFieldWrapper>
        {!formFields.jobTitle.isValid && formFields.jobTitle.isActive ? (
          <FormErrorContainer>
            Must start with a letter and only contain letters and '-'. Minimum
            of 2 chars.
          </FormErrorContainer>
        ) : null} */}
        <PrimaryBtn
          onClick={() => {}}
          color="white"
          bgcolor="#5dbea3"
          hoverBgColor="#7dcbb5"
          isDisabled={false}
        >
          Submit
        </PrimaryBtn>
      </VerticalFormWrapper>
      <FormLink
        $color="#5dbea3"
        $fontSize={1.1}
        onClick={() => {
          setShowModal!(true);
        }}
      >
        Need Help?
      </FormLink>
    </ContentCenteredColumn>
  );
};
