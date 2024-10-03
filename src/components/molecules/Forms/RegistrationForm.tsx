import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";
import { BorderBottomTextInput } from "../../styled/Forms/BorderBottomTextInput";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { FormLink } from "../../styled/Forms/FormLink";
import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import backgroundImg from "../../../assets/white-pattern-background.jpg";
import { countryDialCodes } from "../../../mock-data/countryDialCodes";
import { dateOfBirthOptions } from "../../../mock-data/dateOfBirthOptions";
import { HeadingQuarternary } from "../../atoms/Typography/HeadingQuarternary";

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
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-around",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", top: -16, left: 0 }}>
            <HeadingQuarternary fontSizeRem={0.7} color="#a8a8a8">
              Contact Number
            </HeadingQuarternary>
          </div>

          <select name="country-dial code" id="">
            {countryDialCodes.map((countryInfo) => {
              return (
                <option
                  value={countryInfo.code}
                >{`${countryInfo.code}`}</option>
              );
            })}
          </select>
          <input
            type="text"
            style={{
              width: "90%",
              marginLeft: "4px",
              outline: "none",
              border: "1px solid #5dbea3",
              borderRadius: "2px",
              height: "25px",
            }}
          />
        </div>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            margin: "25px 5px",
          }}
        >
          <HeadingQuarternary fontSizeRem={0.7} color="#a8a8a8">
            Date Of Birth
          </HeadingQuarternary>
          <select name="date" id="">
            {dateOfBirthOptions.days.map((day) => {
              return <option value={day}>{day}</option>;
            })}
          </select>
          <select name="month" id="">
            {dateOfBirthOptions.months.map((month) => {
              return <option value={month}>{month}</option>;
            })}
          </select>
          <select name="year" id="">
            {dateOfBirthOptions.years.map((year) => {
              return <option value={year}>{year}</option>;
            })}
          </select>
        </div>
        <BorderBottomTextInput placeholder="Enter company..." />
        <BorderBottomTextInput placeholder="Enter role..." />
        <BorderBottomTextInput placeholder="Enter job title..." />
        <PrimaryBtn
          onClick={() => {}}
          color="white"
          bgcolor="#5dbea3"
          hoverBgColor="#7dcbb5"
        >
          Submit
        </PrimaryBtn>
      </form>
    </ContentCenteredColumn>
  );
};
