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
          <>
            <ErrorMessage>Must contain letters if filled.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

        <InputWithLabel
          inputId="reg-password"
          labelFor="reg-password"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.password.isActive}
          isValid={formFields.password.isValid}
          labelText="Password"
        >
          {formFields.password.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.password.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>
        {!formFields.password.isValid && formFields.password.isActive ? (
          <>
            <ErrorMessage>
              Must contain an uppercas and lowercase letter. No spaces.
            </ErrorMessage>
            <ErrorMessage>Must contain a number.</ErrorMessage>
            <ErrorMessage>Must contain a special character.</ErrorMessage>
            <ErrorMessage>
              Minimum 8 characters, Maximum 12 characters.
            </ErrorMessage>
          </>
        ) : null}

        <InputWithLabel
          inputId="reg-email"
          labelFor="reg-email"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.email.isActive}
          isValid={formFields.email.isValid}
          labelText="Email"
        >
          {formFields.email.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.email.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>
        {!formFields.email.isValid && formFields.email.isActive ? (
          <ErrorMessage>This doesn't look right. Please check!</ErrorMessage>
        ) : null}
        <PhoneNumberInput countryDialCodes={countryDialCodes} />

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            position: "relative",
            marginTop: "0.8rem",
          }}
        >
          <HeadingQuarternary fontSizeRem={0.7} color="#000000">
            Date Of Birth - DD/MM/YYYY
          </HeadingQuarternary>
          <div
            style={{
              display: "flex",
              
              width: "100%",
            }}
          >
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
        {!formFields.company.isValid && formFields.company.isActive ? (
          <>
            <ErrorMessage>Must contain letters if filled.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

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
        {!formFields.jobTitle.isValid && formFields.jobTitle.isActive ? (
          <>
            <ErrorMessage>Must contain letters if filled.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

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
        {!formFields.role.isValid && formFields.role.isActive ? (
          <>
            <ErrorMessage>Must contain letters if filled.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "0.8rem",
          }}
        >
          <PrimaryBtn
            onClick={() => {}}
            color="white"
            bgcolor="#5dbea3"
            hoverBgColor="#7dcbb5"
            isDisabled={false}
          >
            Submit
          </PrimaryBtn>
        </div>
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
