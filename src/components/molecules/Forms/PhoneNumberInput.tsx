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
      <label
        htmlFor="reg-phoneNumber"
        style={{ fontSize: "0.7rem", fontWeight: "700", marginTop: "0.8rem" }}
      >
        Contact Number
      </label>
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
          }}
        />
      </div>
    </div>
  );
};
