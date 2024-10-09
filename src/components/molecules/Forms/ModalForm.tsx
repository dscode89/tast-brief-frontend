import { useEffect, useState } from "react";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { InputWithLabel } from "./InputWithLabel";
import { InputFieldIconWrapper } from "../../styled/Forms/Inputs/InputFieldIconWrapper";
import { ErrorMessage } from "../../atoms/Errors/ErrorMessage";
import regexPatterns from "../../../utils/regexPatterns";

export const ModalForm = () => {
  const [email, setEmail] = useState({
    value: "",
    isActive: false,
    isValid: false,
  });
  const [submissionIsDisabled, setSubmissionIsDisabled] = useState(true);
  const handleRegistrationFormChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail((current) => {
      return {
        ...current,
        value: e.target.value,
        isActive: e.target.value ? true : false,
        isValid: regexPatterns.email.test(e.target.value),
      };
    });
  };

  useEffect(() => {
    if (email.isValid) {
      setSubmissionIsDisabled(false);
    } else {
      setSubmissionIsDisabled(true);
    }
  }, [email]);

  return (
    <form style={{ width: "90%", padding: "0.35em" }}>
      <InputWithLabel
        inputId="reg-email"
        labelFor="reg-email"
        isRequired
        onChange={handleRegistrationFormChange}
        isActive={email.isActive}
        isValid={email.isValid}
        labelText="Email"
      >
        {email.isValid ? (
          <InputFieldIconWrapper $color="#5dbea3">
            &#10003;
          </InputFieldIconWrapper>
        ) : email.value !== "" ? (
          <InputFieldIconWrapper $color="#FAA0A0">
            &#10007;
          </InputFieldIconWrapper>
        ) : null}
      </InputWithLabel>
      {!email.isValid && email.isActive ? (
        <>
          <ErrorMessage>
            That doesn't look right! Please provide a valid email.
          </ErrorMessage>
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
          isDisabled={submissionIsDisabled}
        >
          Submit
        </PrimaryBtn>
      </div>
    </form>
  );
};
