import { SelectDropDown } from "./SelectDropDown";
import { HeadingQuarternary } from "../../atoms/Typography/HeadingQuarternary";
import { SetStateAction, useState } from "react";
import { FormFieldInputs } from "../../../utils/types";

interface PhoneNumberProps {
  countryDialCodes: {
    area: string;
    code: string;
  }[];
  setFormFields: React.Dispatch<React.SetStateAction<FormFieldInputs>>;
  numberDetails: { value: string; isActive: boolean; isValid: boolean };
}

export const PhoneNumberInput = ({
  countryDialCodes,
  setFormFields,
  numberDetails,
}: PhoneNumberProps) => {
  // figure out how to make the atomic select statement be a controlled component
  // spend some time making all of the non atomic styling atomic and reusable and generally make more sense
  // handle all submission validation so that the all submission buttons only become usable when the forms are valid
  // go over all of the regex for all form inputs and make sure that all forms are validated and that clear messages are provided if this is not the case
  // make all forms responsive
  // fix regex and add error message if phone number is not 11 numbers and contains only numbers
  // MAKE SURE ALL FORM ELEMENTS IN ALL FORMS UPDATE STATE

  const [dialCode, setDialCode] = useState("07");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields((currentFields) => {
      return {
        ...currentFields,
        phoneNumber: {
          value: e.target.value,
          isActive: true,
          isValid: true,
        },
      };
    });
  };

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
        Contact Number(UK Numbers Only)
      </label>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <SelectDropDown
          onChange={(e) => {
            setDialCode(e.target.value);
          }}
          dropDownName="dial-codes"
          options={countryDialCodes}
          optionValue="code"
          optionText="code"
          isDialCode
        />

        <input
          onChange={handleNumberChange}
          value={numberDetails.value}
          type="text"
          id="reg-phoneNumber"
          style={{
            width: "100%",
            marginLeft: "4px",
            outline: "none",
            border: "2px solid #5dbea3",
            borderRadius: "2px",
            color: "#5dbea3",
            height: "34.33px",
            padding: "0 0.25em",
            fontWeight: "600",
          }}
        />
      </div>
    </div>
  );
};
