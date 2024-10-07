import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { VerticalFormWrapper } from "../../styled/Forms/VerticalFormWrapper";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import { useState } from "react";
import regexPatterns from "../../../utils/regexPatterns";
import { InputWithLabel } from "./InputWithLabel";
import { InputFieldIconWrapper } from "../../styled/Forms/Inputs/InputFieldIconWrapper";
import { ErrorMessage } from "../../atoms/Errors/ErrorMessage";

export const CompanyRegistrationForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    companyName: { value: "", isActive: false, isValid: false },
    password: { value: "", isActive: false, isValid: false },
    email: { value: "", isActive: false, isValid: false },
    phoneNumber: { value: "", isActive: false, isValid: false },
    addressFirstLine: { value: "", isActive: false, isValid: false },
    addressSecondLine: { value: "", isActive: false, isValid: false },
    addressPostcode: { value: "", isActive: false, isValid: false },
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
      <VerticalFormWrapper>
        <HeadingTertiary fontSizeRem={1.3} color="">
          Let's get set up!
        </HeadingTertiary>

        <InputWithLabel
          inputId="reg-companyName"
          labelFor="reg-companyName"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.companyName.isActive}
          isValid={formFields.companyName.isValid}
          labelText="Company Name"
        >
          {formFields.companyName.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.companyName.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>
        {!formFields.companyName.isValid && formFields.companyName.isActive ? (
          <>
            <ErrorMessage>Must contain letters if filled.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

        <InputWithLabel
          inputId="reg-email"
          labelFor="reg-email"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.email.isActive}
          isValid={formFields.email.isValid}
          labelText="Company Email"
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
          <>
            <ErrorMessage>
              That doesn't look right! Please provide a valid email.
            </ErrorMessage>
          </>
        ) : null}
      </VerticalFormWrapper>
    </ContentCenteredColumn>
  );
};
