import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { BorderBottomTextInput } from "../../styled/Forms/BorderBottomTextInput";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { FormLink } from "../../styled/Forms/FormLink";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { VerticalFormWrapper } from "../../styled/Forms/VerticalFormWrapper";
import { SignInFormProps } from "./RegistrationForm";
import { useState } from "react";
import regexPatterns from "../../../utils/regexPatterns";
import { FormErrorContainer } from "../Errors/FormErrorContainer";

export const LoginForm = ({
  setIsLogin,
  startAnimation,
  setStartAnimation,
}: SignInFormProps) => {
  const [formFields, setFormFields] = useState({
    password: { value: "", isActive: false, isValid: false },
    emailAddress: { value: "", isActive: false, isValid: false },
  });

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.id === "log-email") {
      console.log("change");
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
    } else if (e.target.id === "log-email") {
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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <BorderBottomTextInput
            onChange={handleLoginFormChange}
            placeholder="Enter Email..."
            id="log-email"
            value={formFields.emailAddress.value}
            $isActive={formFields.emailAddress.isActive}
            $isValid={formFields.emailAddress.isValid}
          />

          {formFields.emailAddress.isValid ? (
            <p
              style={{
                position: "absolute",
                top: "50%",
                right: 40,
                transform: "translate(0%, -80%) rotate(10deg)",
                color: "#5dbea3",
              }}
            >
              &#10003;
            </p>
          ) : null}
        </div>

        {!formFields.emailAddress.isValid &&
        formFields.emailAddress.isActive ? (
          <FormErrorContainer>Invalid Email Format!</FormErrorContainer>
        ) : null}
        <BorderBottomTextInput
          onChange={handleLoginFormChange}
          placeholder="Enter Password..."
          type="password"
          id="log-password"
          value={formFields.password.value}
          $isActive={formFields.password.isActive}
          $isValid={formFields.password.isValid}
        />
        <PrimaryBtn
          color="white"
          bgcolor="#5dbea3"
          hoverBgColor="#7dcbb5"
          onClick={() => {}}
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
