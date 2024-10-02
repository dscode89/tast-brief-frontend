import { TwoColumnedLayout } from "../styled/containers/TwoColumnedLayout";
import { MultiBackgroundImageBlock } from "../molecules/images/MultiBackgroundImageBlock";
import { LoginForm } from "../molecules/Forms/LoginForm";

export const LoginFormTemplate = () => {
  return (
    <TwoColumnedLayout>
      <LoginForm />
      <MultiBackgroundImageBlock />
    </TwoColumnedLayout>
  );
};
