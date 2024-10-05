import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { BorderBottomTextInput } from "../../styled/Forms/Inputs/BorderBottomTextInput";
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

  const [formFields, setFormFields] = useState({
    firstName: { value: "", isActive: false, isValid: false },
    lastName: { value: "", isActive: false, isValid: false },
    password: { value: "", isActive: false, isValid: false },
    emailAddress: { value: "", isActive: false, isValid: false },
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
        <BorderBottomTextInput
          placeholder="Enter firstname..."
          id="firstName"
          value={formFields.firstName.value}
          $isActive={formFields.firstName.isActive}
          $isValid={formFields.firstName.isValid}
        />
        <FormErrorContainer>Must be this</FormErrorContainer>
        <BorderBottomTextInput
          placeholder="Enter lastname..."
          id="lastName"
          value={formFields.lastName.value}
          $isActive={formFields.lastName.isActive}
          $isValid={formFields.lastName.isValid}
        />
        <BorderBottomTextInput
          placeholder="Enter password..."
          type="password"
          id="reg-password"
          autoComplete="false"
          value={formFields.password.value}
          $isActive={formFields.password.isActive}
          $isValid={formFields.password.isValid}
        />
        <BorderBottomTextInput
          placeholder="Enter email..."
          id="reg-email"
          value={formFields.emailAddress.value}
          $isActive={formFields.emailAddress.isActive}
          $isValid={formFields.emailAddress.isValid}
        />
        <PhoneNumberInput countryDialCodes={countryDialCodes} />

        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            margin: "25px 5px",
          }}
        >
          <HeadingQuarternary fontSizeRem={0.7} color="#a8a8a8">
            DOB:(DD/MM/YYYY)
          </HeadingQuarternary>
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
        <BorderBottomTextInput
          placeholder="Enter company..."
          id="company"
          autoComplete="false"
          value={formFields.company.value}
          $isActive={formFields.company.isActive}
          $isValid={formFields.company.isValid}
        />
        <BorderBottomTextInput
          placeholder="Enter role..."
          id="role"
          value={formFields.role.value}
          $isActive={formFields.role.isActive}
          $isValid={formFields.role.isValid}
        />
        <BorderBottomTextInput
          placeholder="Enter job title..."
          id="job-title"
          value={formFields.jobTitle.value}
          $isActive={formFields.jobTitle.isActive}
          $isValid={formFields.jobTitle.isValid}
        />
        <PrimaryBtn
          onClick={() => {}}
          color="white"
          bgcolor="#5dbea3"
          hoverBgColor="#7dcbb5"
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
