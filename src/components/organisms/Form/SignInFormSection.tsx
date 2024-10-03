import { useState } from "react";
import { LoginForm } from "../../molecules/Forms/LoginForm";
import { RegistrationForm } from "../../molecules/Forms/RegistrationForm";

export const SignInFormSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <RegistrationForm setIsLogin={setIsLogin} />
      )}
    </>
  );
};
