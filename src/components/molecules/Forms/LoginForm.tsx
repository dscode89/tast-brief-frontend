import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { BorderBottomTextInput } from "../../styled/Forms/Inputs/BorderBottomTextInput";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { FormLink } from "../../styled/Forms/FormLink";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { VerticalFormWrapper } from "../../styled/Forms/VerticalFormWrapper";
import { SignInFormProps } from "./RegistrationForm";
import { useState } from "react";
import regexPatterns from "../../../utils/regexPatterns";
import { FormErrorContainer } from "../Errors/FormErrorContainer";
import { InputFieldIconWrapper } from "../../styled/Forms/Inputs/InputFieldIconWrapper";
import { InputFieldWrapper } from "../../styled/Forms/Inputs/InputFieldWrapper";

export const LoginForm = ({
  setIsLogin,
  startAnimation,
  setStartAnimation,
}: SignInFormProps) => {
  const [formFields, setFormFields] = useState({
    password: { value: "", isActive: false, isValid: false },
    emailAddress: { value: "", isActive: false, isValid: false },
  });

  console.log(!formFields.password.isValid || !formFields.emailAddress.isValid);
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.id === "log-email") {
      setFormFields((current) => {
        return {
          ...current,
          emailAddress: {
            isActive: e.target.value ? true : false,
            value: e.target.value,
            isValid: regexPatterns.email.test(e.target.value),
          },
        };
      });
    } else if (e.target.id === "log-password") {
      setFormFields((current) => {
        return {
          ...current,
          password: {
            isActive: e.target.value ? true : false,
            value: e.target.value,
            isValid: regexPatterns.password.test(e.target.value),
          },
        };
      });
    }
  };

  return (
    <ContentCenteredColumn
      $shouldAnimate={startAnimation!}
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
        <InputFieldWrapper>
          <BorderBottomTextInput
            onChange={handleLoginFormChange}
            placeholder="Enter Email..."
            id="log-email"
            value={formFields.emailAddress.value}
            $isActive={formFields.emailAddress.isActive}
            $isValid={formFields.emailAddress.isValid}
          />

          {formFields.emailAddress.isValid ? (
            <InputFieldIconWrapper>&#10003;</InputFieldIconWrapper>
          ) : null}
        </InputFieldWrapper>
        {!formFields.emailAddress.isValid &&
        formFields.emailAddress.isActive ? (
          <FormErrorContainer>Invalid Email Format!</FormErrorContainer>
        ) : null}

        <InputFieldWrapper>
          <BorderBottomTextInput
            onChange={handleLoginFormChange}
            placeholder="Enter Password..."
            type="password"
            id="log-password"
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
        ) : null}

        <PrimaryBtn
          color="white"
          bgcolor="#5dbea3"
          hoverBgColor="#7dcbb5"
          onClick={() => {}}
          isDisabled={
            !formFields.emailAddress.isValid || !formFields.password.isValid
          }
        >
          Login
        </PrimaryBtn>
        <label>
          Remember me?
          <input
            type="checkbox"
            style={{ marginLeft: "0.2em" }}
            id="log-checkbox"
          />
        </label>
      </VerticalFormWrapper>

      <FormLink
        $color="#5dbea3"
        $fontSize={1.1}
        onClick={() => {
          setIsLogin(false);
          setStartAnimation!(true);
        }}
      >
        Not registered? Click here
      </FormLink>
      <FormLink href="/password-reset" $color="#5dbea3" $fontSize={1.1}>
        Forgot your password?
      </FormLink>
    </ContentCenteredColumn>
  );
};
