import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { countryDialCodes } from "../../../mock-data/countryDialCodes";
import { dateOfBirthOptions } from "../../../mock-data/dateOfBirthOptions";
import { HeadingQuarternary } from "../../atoms/Typography/HeadingQuarternary";
import { FormLink } from "../../styled/Forms/FormLink";
import React, { FormEvent, SetStateAction, useEffect, useState } from "react";
import { VerticalFormWrapper } from "../../styled/Forms/VerticalFormWrapper";
import { SelectDropDown } from "./SelectDropDown";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { InputFieldIconWrapper } from "../../styled/Forms/Inputs/InputFieldIconWrapper";
import regexPatterns from "../../../utils/regexPatterns";
import { InputWithLabel } from "./InputWithLabel";
import { ErrorMessage } from "../../atoms/Errors/ErrorMessage";
import { FormFieldInputs } from "../../../utils/types";
import { DateOfBirthInput } from "./DateOfBirthInput";

export interface SignInFormProps {}

export const RegistrationForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [formFields, setFormFields] = useState<FormFieldInputs>({
    fullName: { value: "", isActive: false, isValid: false },
    password: { value: "", isActive: false, isValid: false },
    phoneNumber: { value: "", isActive: false, isValid: false },
    dateOfBirth: { value: "", isActive: false, isValid: false },
  });
  const [submissionIsDisabled, setSubmissionIsDisabled] = useState(true);

  useEffect(() => {
    if (
      formFields.password.isValid &&
      formFields.phoneNumber.isValid &&
      formFields.fullName.isValid &&
      formFields.dateOfBirth.isValid
    ) {
      setSubmissionIsDisabled(false);
    } else {
      setSubmissionIsDisabled(true);
    }
  }, [formFields]);

  const handleRegistrationFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const specificInput = e.target.id.split("-")[1];
    const specificRegex =
      specificInput === "password" || specificInput === "email"
        ? specificInput
        : "genericTextInput";

    setFormFields((current) => {
      return {
        ...current,
        [specificInput]: {
          isActive:
            e.target.nodeName === "SELECT"
              ? true
              : e.target.value
              ? true
              : false,
          value: e.target.value,
          isValid:
            e.target.nodeName === "SELECT"
              ? true
              : regexPatterns[specificRegex].test(e.target.value),
        },
      };
    });
  };

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
            <ErrorMessage>Cannot start with a space.</ErrorMessage>
            <ErrorMessage>Minimum of 5 characters.</ErrorMessage>
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

        <PhoneNumberInput
          countryDialCodes={countryDialCodes}
          setFormFields={setFormFields}
          numberDetails={formFields.phoneNumber}
        />

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
            isDisabled={submissionIsDisabled}
          >
            Submit
          </PrimaryBtn>
        </div>
      </VerticalFormWrapper>
      <FormLink $color="#5dbea3" $fontSize={1.1} onClick={() => {}}>
        Need Help?
      </FormLink>
    </ContentCenteredColumn>
  );
};

// GO OVER ALL USER INTERACTIONS WITH FORMS AND THEN MOVE ONTO REPSONSIVENESS FOR ALL FORMS

