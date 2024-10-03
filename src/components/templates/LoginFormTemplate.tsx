import { TwoColumnedLayout } from "../styled/containers/TwoColumnedLayout";
import { MultiBackgroundImageBlock } from "../molecules/images/MultiBackgroundImageBlock";

import img1 from "../../assets/rotating1.jpg";
import img2 from "../../assets/rotating2.jpg";
import img3 from "../../assets/rotating3.jpg";

import { SignInFormSection } from "../organisms/Form/SignInFormSection";

export const LoginFormTemplate = () => {
  return (
    <TwoColumnedLayout>
      <SignInFormSection />
      <MultiBackgroundImageBlock images={[img1, img2, img3]} />
    </TwoColumnedLayout>
  );
};
