import { useEffect, useState } from "react";
import { RequiredInputLabel } from "../../styled/Typography/RequiredInputLabel";
import { dateOfBirthOptions } from "../../../mock-data/dateOfBirthOptions";
import { SelectDropDown } from "./SelectDropDown";
import { FormFieldInputs } from "../../../utils/types";

interface DateOfBirthInputProps {
  setFormFields: React.Dispatch<React.SetStateAction<FormFieldInputs>>;
}

export const DateOfBirthInput = ({ setFormFields }: DateOfBirthInputProps) => {
  const [dobDate, setDobDate] = useState("01");
  const [dobMonth, setDobMonth] = useState("01");
  const [dobYear, setDobYear] = useState("2024");
  const [dobDateActive, setDobDateActive] = useState(false);
  const [dobMonthActive, setDobMonthActive] = useState(false);
  const [dobYearActive, setDobYearActive] = useState(false);

  useEffect(() => {
    const overSixteenCalculator = (dateString: string) => {
      const [date, month, year] = dateString.split("/");
      const birthDate = new Date(+year, +month, +date).getFullYear();
      return new Date().getFullYear() - birthDate >= 16;
    };

    setFormFields((current) => {
      return {
        ...current,
        dateOfBirth: {
          value: `${dobDate}/${dobMonth}/${dobYear}`,
          isActive: true,
          isValid: overSixteenCalculator(`${dobDate}/${dobMonth}/${dobYear}`),
        },
      };
    });
  }, [dobDate, dobMonth, dobYear]);

  return (
    <div>
      <RequiredInputLabel
        htmlFor="reg-phoneNumber"
        labelText="Date Of Birth(DD/MM/YYYY)"
      />

      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <SelectDropDown
          onChange={(e) => {
            setDobDateActive(true);
            setDobDate(e.target.value);
          }}
          dropDownName="date"
          options={dateOfBirthOptions.days}
          optionText="day"
          optionValue="day"
          isValid={dobDateActive}
          value={dobDate}
          id="hello"
        />
        <SelectDropDown
          onChange={(e) => {
            setDobMonthActive(true);
            setDobMonth(e.target.value);
          }}
          dropDownName="month"
          options={dateOfBirthOptions.months}
          optionText="month"
          optionValue="month"
          isValid={dobMonthActive}
          value={dobMonth}
          id="hello"
        />

        <SelectDropDown
          onChange={(e) => {
            setDobYearActive(true);
            setDobYear(e.target.value);
          }}
          dropDownName="date"
          options={dateOfBirthOptions.years}
          optionText="year"
          optionValue="year"
          isValid={dobYearActive}
          value={dobYear}
          id="hello"
        />
      </div>
    </div>
  );
};
