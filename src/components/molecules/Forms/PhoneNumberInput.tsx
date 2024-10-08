import { SelectDropDown } from "./SelectDropDown";
import { FormFieldInputs } from "../../../utils/types";
import regexPatterns from "../../../utils/regexPatterns";
import { useState } from "react";
import { SelectElementCompanionInput } from "../../styled/Forms/Inputs/SelectCompanionInput";
import { RequiredInputLabel } from "../../styled/Typography/RequiredInputLabel";

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
    const completeNumber = dialCode + e.target.value;
    setFormFields((currentFields) => {
      return {
        ...currentFields,
        phoneNumber: {
          value: e.target.value,
          isActive: e.target.value ? true : false,
          isValid:
            regexPatterns.phoneNumber.test(e.target.value) &&
            completeNumber.length === 11,
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
      <RequiredInputLabel
        htmlFor="reg-phoneNumber"
        labelText="Contact Number(UK Numbers Only)"
      />

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <SelectDropDown
          id="reg-phoneNumberDialCode"
          isValid={
            numberDetails.isActive
              ? numberDetails.isValid
                ? true
                : false
              : true
          }
          value={dialCode}
          onChange={(e) => {
            setDialCode(e.target.value);
          }}
          dropDownName="dial-codes"
          options={countryDialCodes}
          optionValue="code"
          optionText="code"
          isDialCode
        />

        <SelectElementCompanionInput
          onChange={handleNumberChange}
          value={numberDetails.value}
          type="text"
          id="reg-phoneNumber"
          $isActive={numberDetails.isActive}
          $isValid={numberDetails.isValid}
        />
      </div>
    </div>
  );
};
