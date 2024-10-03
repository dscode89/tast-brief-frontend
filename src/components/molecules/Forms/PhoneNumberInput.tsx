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

      <SelectDropDown
        dropDownName="dial-codes"
        options={countryDialCodes}
        optionValue="code"
        optionText="code"
      />
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
  );
};
