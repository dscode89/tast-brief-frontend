import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { countryDialCodes } from "../../../mock-data/countryDialCodes";
import { FormLink } from "../../styled/Forms/FormLink";
import { FormEvent, useEffect, useState } from "react";
import { VerticalFormWrapper } from "../../styled/Forms/VerticalFormWrapper";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { InputFieldIconWrapper } from "../../styled/Forms/Inputs/InputFieldIconWrapper";
import { handleRegistrationFormChange } from "../../../utils/formHandlers/formHandlers";
import { InputWithLabel } from "./InputWithLabel";
import { ErrorMessage } from "../../atoms/Errors/ErrorMessage";
import { FormFieldInputs } from "../../../utils/types";
import { DateOfBirthInput } from "./DateOfBirthInput";
import { ContentCenteredRow } from "../../styled/containers/ContentCenteredRow";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export interface SignInFormProps {}

export const RegistrationForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [formFields, setFormFields] = useState<FormFieldInputs>({
    firstName: { value: "", isActive: false, isValid: false },
    lastName: { value: "", isActive: false, isValid: false },
    password: { value: "", isActive: false, isValid: false },
    phoneNumber: { value: "", isActive: false, isValid: false },
    dateOfBirth: { value: "", isActive: false, isValid: false },
  });
  const [submissionIsDisabled, setSubmissionIsDisabled] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (
      formFields.password.isValid &&
      formFields.phoneNumber.isValid &&
      formFields.firstName.isValid &&
      formFields.lastName.isValid &&
      formFields.dateOfBirth.isValid
    ) {
      setSubmissionIsDisabled(false);
    } else {
      setSubmissionIsDisabled(true);
    }
  }, [formFields]);

  return (
    <ContentCenteredColumn
      $width={width}
      $shouldAnimate={true}
      $animateDirection="up"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <VerticalFormWrapper onSubmit={handleSubmit} $viewPortWidth={width}>
        <HeadingTertiary fontSizeRem={1.3} color="">
          Let's get set up!
        </HeadingTertiary>

        <InputWithLabel
          inputId="reg-firstName"
          labelFor="reg-firstName"
          isRequired
          onChange={(e) => {
            handleRegistrationFormChange(e, setFormFields);
          }}
          isActive={formFields.firstName.isActive}
          isValid={formFields.firstName.isValid}
          labelText="First Name"
        >
          {formFields.firstName.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.firstName.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>
        {!formFields.firstName.isValid && formFields.firstName.isActive ? (
          <>
            <ErrorMessage>At least 2 characters long.</ErrorMessage>
            <ErrorMessage>Cannot start with a space.</ErrorMessage>
            <ErrorMessage>Must contain a letter.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

        <InputWithLabel
          inputId="reg-lastName"
          labelFor="reg-lastName"
          isRequired
          onChange={(e) => {
            handleRegistrationFormChange(e, setFormFields);
          }}
          isActive={formFields.lastName.isActive}
          isValid={formFields.lastName.isValid}
          labelText="Last Name"
        >
          {formFields.lastName.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.lastName.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>
        {!formFields.lastName.isValid && formFields.lastName.isActive ? (
          <>
            <ErrorMessage>At least 2 characters long.</ErrorMessage>
            <ErrorMessage>No special characters.</ErrorMessage>
            <ErrorMessage>Cannot start with a space.</ErrorMessage>
            <ErrorMessage>Must contain a letter.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

        <InputWithLabel
          inputId="reg-password"
          labelFor="reg-password"
          isRequired
          onChange={(e) => {
            handleRegistrationFormChange(e, setFormFields);
          }}
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

        <PhoneNumberInput
          countryDialCodes={countryDialCodes}
          setFormFields={setFormFields}
          numberDetails={formFields.phoneNumber}
        />
        {!formFields.phoneNumber.isValid && formFields.phoneNumber.isActive ? (
          <>
            <ErrorMessage>Can only contain numbers.</ErrorMessage>
            <ErrorMessage>
              Complete phone number must be 11 digits.
            </ErrorMessage>
            <ErrorMessage>
              Complete phone number can not contain spaces.
            </ErrorMessage>
          </>
        ) : null}

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
          <DateOfBirthInput setFormFields={setFormFields} />
          {!formFields.dateOfBirth.isValid &&
          formFields.dateOfBirth.isActive ? (
            <>
              <ErrorMessage>Must be over the age of 16.</ErrorMessage>
            </>
          ) : null}
        </div>

        <ContentCenteredRow>
          <PrimaryBtn
            color="white"
            bgcolor="#5dbea3"
            hoverBgColor="#7dcbb5"
            onClick={() => {}}
            isDisabled={submissionIsDisabled}
          >
            Submit
          </PrimaryBtn>
        </ContentCenteredRow>
      </VerticalFormWrapper>
      <FormLink href="/password-reset" $color="#5dbea3" $fontSize={1.1}>
        Forgot your password?
      </FormLink>
    </ContentCenteredColumn>
  );
};
