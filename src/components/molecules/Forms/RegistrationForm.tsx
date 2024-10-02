import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { BorderBottomTextInput } from "../../styled/Forms/BorderBottomTextInput";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { FormLink } from "../../styled/Forms/FormLink";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { countryDialCodes } from "../../../mock-data/countryDialCodes";

export const RegistrationForm = () => {
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
          Let's get set up!
        </HeadingTertiary>
        <BorderBottomTextInput placeholder="Enter firstname..." />
        <BorderBottomTextInput placeholder="Enter lastname..." />
        <BorderBottomTextInput
          placeholder="Enter password..."
          type="password"
        />
        <BorderBottomTextInput placeholder="Enter email..." />
        <div style={{ width: "90%", display: "flex" }}>
          <select name="country-dial code" id="">
            {countryDialCodes.map((countryInfo) => {
              return (
                <option
                  value={countryInfo.code}
                >{`${countryInfo.code}`}</option>
              );
            })}
          </select>
          <input type="text" style={{ width: "100%" }} />
        </div>
      </form>
    </ContentCenteredColumn>
  );
};
