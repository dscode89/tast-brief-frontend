import { TwoColumnedLayout } from "../styled/containers/TwoColumnedLayout";
import { MultiBackgroundImageBlock } from "../molecules/images/MultiBackgroundImageBlock";
import { LoginForm } from "../molecules/Forms/LoginForm";
import img1 from "../../assets/rotating1.jpg";
import img2 from "../../assets/rotating2.jpg";
import img3 from "../../assets/rotating3.jpg";
import { RegistrationForm } from "../molecules/Forms/RegistrationForm";

export const LoginFormTemplate = () => {
  const currentURL = window.location.href;

  console.log(currentURL);
  return (
    <TwoColumnedLayout>
      {currentURL.endsWith("/login/register") ? (
        <RegistrationForm />
      ) : (
        <LoginForm />
      )}
      <MultiBackgroundImageBlock images={[img1, img2, img3]} />
    </TwoColumnedLayout>
  );
};
