import { useState } from "react";
import { LoginForm } from "../../molecules/Forms/LoginForm";
import { RegistrationForm } from "../../molecules/Forms/RegistrationForm";

export const SignInFormSection = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <>
      {isLogin ? (
        <LoginForm
          setIsLogin={setIsLogin}
          startAnimation={startAnimation}
          setStartAnimation={setStartAnimation}
        />
      ) : (
        <RegistrationForm setIsLogin={setIsLogin} />
      )}
    </>
  );
};
