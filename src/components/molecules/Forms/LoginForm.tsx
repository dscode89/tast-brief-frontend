import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { BorderBottomTextInput } from "../../styled/Forms/BorderBottomTextInput";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { FormLink } from "../../styled/Forms/FormLink";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";

export const LoginForm = () => {
  return (
    <ContentCenteredColumn
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <form
        style={{
          border: "1px solid #D3D3D3",
          borderRadius: "5px",
          padding: "1.6em",
          display: "flex",
          flexDirection: "column",
          width: "45%",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          backgroundColor: "#ffffff",
        }}
      >
        <HeadingTertiary fontSizeRem={1.3} color="">
          Enter Login Details
        </HeadingTertiary>
        <BorderBottomTextInput placeholder="Enter Email..." />
        <BorderBottomTextInput
          placeholder="Enter Password..."
          type="password"
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
          <input type="checkbox" style={{ marginLeft: "0.2em" }} />
        </label>
      </form>
      <FormLink href="/login/register" $color="#5dbea3" $fontSize={1.1}>
        Not registered? Click here
      </FormLink>
      <FormLink href="/password-reset" $color="#5dbea3" $fontSize={1.1}>
        Forgot your password?
      </FormLink>
    </ContentCenteredColumn>
  );
};
