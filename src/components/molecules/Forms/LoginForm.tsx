import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { FormLink } from "../../styled/Forms/FormLink";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { VerticalFormWrapper } from "../../styled/Forms/VerticalFormWrapper";
import { useState } from "react";
import regexPatterns from "../../../utils/regexPatterns";
import { InputFieldIconWrapper } from "../../styled/Forms/Inputs/InputFieldIconWrapper";
import { InputWithLabel } from "./InputWithLabel";
import { ErrorMessage } from "../../atoms/Errors/ErrorMessage";

export const LoginForm = () => {
  const [formFields, setFormFields] = useState({
    password: { value: "", isActive: false, isValid: false },
    email: { value: "", isActive: false, isValid: false },
  });

  console.log(!formFields.password.isValid || !formFields.email.isValid);
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const specificInput = e.target.id.split("-")[1];

    setFormFields((current) => {
      return {
        ...current,
        [specificInput]: {
          isActive: e.target.value ? true : false,
          value: e.target.value,
          isValid: regexPatterns[specificInput].test(e.target.value),
        },
      };
    });
  };

  return (
    <ContentCenteredColumn
      $shouldAnimate={false}
      $animateDirection="right"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <VerticalFormWrapper onSubmit={handleLoginSubmit}>
        <HeadingTertiary fontSizeRem={1.3} color="">
          Enter Login Details
        </HeadingTertiary>

        <InputWithLabel
          inputId="log-email"
          labelFor="log-email"
          isRequired
          onChange={handleLoginFormChange}
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

        <InputWithLabel
          inputId="log-password"
          labelFor="log-password"
          isRequired
          onChange={handleLoginFormChange}
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
            Login
          </PrimaryBtn>
          <label>
            Remember me
            <input
              type="checkbox"
              style={{ marginLeft: "0.2em" }}
              id="log-checkbox"
            />
          </label>
        </div>
      </VerticalFormWrapper>
      <FormLink href="/login/register/company" $color="#5dbea3" $fontSize={1.1}>
        Register your company
      </FormLink>
      <FormLink href="/password-reset" $color="#5dbea3" $fontSize={1.1}>
        Forgot your password?
      </FormLink>
    </ContentCenteredColumn>
  );
};
