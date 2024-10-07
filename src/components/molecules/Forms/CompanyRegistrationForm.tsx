import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { VerticalFormWrapper } from "../../styled/Forms/VerticalFormWrapper";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import { FormEvent, useState } from "react";
import regexPatterns from "../../../utils/regexPatterns";
import { InputWithLabel } from "./InputWithLabel";
import { InputFieldIconWrapper } from "../../styled/Forms/Inputs/InputFieldIconWrapper";
import { ErrorMessage } from "../../atoms/Errors/ErrorMessage";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { countryDialCodes } from "../../../mock-data/countryDialCodes";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { HeadingQuarternary } from "../../atoms/Typography/HeadingQuarternary";
import { SelectDropDown } from "./SelectDropDown";

import { FormFieldInputs } from "../../../utils/types";

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

  const [formFields, setFormFields] = useState<FormFieldInputs>({
    companyName: { value: "", isActive: false, isValid: false },
    password: { value: "", isActive: false, isValid: false },
    email: { value: "", isActive: false, isValid: false },
    phoneNumber: { value: "", isActive: false, isValid: false },
    addressFirstLine: { value: "", isActive: false, isValid: false },
    addressSecondLine: { value: "", isActive: false, isValid: false },
    addressPostcode: { value: "", isActive: false, isValid: false },
  });

  const allFieldsValid =
    formFields.email.isValid &&
    formFields.password.isValid &&
    formFields.addressFirstLine.isValid &&
    formFields.addressSecondLine.isValid &&
    formFields.addressPostcode.isValid &&
    formFields.companyName.isValid &&
    formFields.phoneNumber;
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

        <PhoneNumberInput
          countryDialCodes={countryDialCodes}
          numberDetails={formFields.phoneNumber}
          setFormFields={setFormFields}
        />

        <InputWithLabel
          inputId="reg-addressFirstLine"
          labelFor="reg-addressFirstLine"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.addressFirstLine.isActive}
          isValid={formFields.addressFirstLine.isValid}
          labelText="Address Line 1"
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
        {!formFields.addressFirstLine.isValid &&
        formFields.addressFirstLine.isActive ? (
          <>
            <ErrorMessage>Must contain letters if filled.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

        <InputWithLabel
          inputId="reg-addressSecondLine"
          labelFor="reg-addressSecondLine"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.addressSecondLine.isActive}
          isValid={formFields.addressSecondLine.isValid}
          labelText="Address Line 2"
        >
          {formFields.addressSecondLine.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.addressSecondLine.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>
        {!formFields.addressSecondLine.isValid &&
        formFields.addressSecondLine.isActive ? (
          <>
            <ErrorMessage>Must contain letters if filled.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

        <InputWithLabel
          inputId="reg-addressPostcode"
          labelFor="reg-addressPostcode"
          isRequired
          onChange={handleRegistrationFormChange}
          isActive={formFields.addressPostcode.isActive}
          isValid={formFields.addressPostcode.isValid}
          labelText="Postcode"
        >
          {formFields.addressSecondLine.isValid ? (
            <InputFieldIconWrapper $color="#5dbea3">
              &#10003;
            </InputFieldIconWrapper>
          ) : formFields.addressSecondLine.value !== "" ? (
            <InputFieldIconWrapper $color="#FAA0A0">
              &#10007;
            </InputFieldIconWrapper>
          ) : null}
        </InputWithLabel>
        {!formFields.addressPostcode.isValid &&
        formFields.addressPostcode.isActive ? (
          <>
            <ErrorMessage>Must contain letters if filled.</ErrorMessage>
            <ErrorMessage>Maximum of 30 characters.</ErrorMessage>
          </>
        ) : null}

        <div
          style={{
            marginTop: "0.8rem",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            padding: "0.25em",
          }}
        >
          <HeadingQuarternary fontSizeRem={0.7} color="#000000">
            Choose Plan
          </HeadingQuarternary>

          <SelectDropDown
            onChange={() => {}}
            dropDownName="plans"
            options={[
              "Free Trial(30days)",
              "Bronze - £100p/m",
              "Silver - £300p/m",
              "Gold - £500p/m",
            ]}
            optionText="plan"
            optionValue="plan"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: "0.8rem",
          }}
        >
          <PrimaryBtn
            color="white"
            bgcolor="#5dbea3"
            hoverBgColor="#7dcbb5"
            onClick={() => {}}
            isDisabled={
              !formFields.email.isValid || !formFields.password.isValid
            }
          >
            Submit
          </PrimaryBtn>
        </div>
      </VerticalFormWrapper>
    </ContentCenteredColumn>
  );
};
