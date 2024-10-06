import { SelectDropDown } from "./SelectDropDown";
import { HeadingQuarternary } from "../../atoms/Typography/HeadingQuarternary";

interface PhoneNumberProps {
  countryDialCodes: {
    country: string;
    code: string;
  }[];
}

export const PhoneNumberInput = ({ countryDialCodes }: PhoneNumberProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        position: "relative",
      }}
    >
      <HeadingQuarternary fontSizeRem={0.7} color="#000000">
        Contact Number
      </HeadingQuarternary>

      <div style={{ display: "flex" }}>
        <SelectDropDown
          dropDownName="dial-codes"
          options={countryDialCodes}
          optionValue="code"
          optionText="code"
        />
        <input
          type="text"
          id="reg-phoneNumber"
          style={{
            width: "100%",
            marginLeft: "4px",
            outline: "none",
            border: "1px solid #5dbea3",
            borderRadius: "2px",
            height: "25px",
          }}
        />
      </div>
    </div>
  );
};
