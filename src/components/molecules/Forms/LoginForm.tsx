import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { BorderBottomTextInput } from "../../styled/Forms/BorderBottomTextInput";

export const LoginForm = () => {
  return (
    <ContentCenteredColumn style={{ backgroundColor: "red" }}>
      <form>
        <BorderBottomTextInput placeholder="Enter Email..." />
        <BorderBottomTextInput
          placeholder="Enter Password..."
          type="password"
        />
      </form>
    </ContentCenteredColumn>
  );
};
