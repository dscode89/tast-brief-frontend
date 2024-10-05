import { v4 as uuidv4 } from "uuid";

interface SelectDropDownProps {
  options: { [key: string]: string | number }[] | string[] | number[];
  optionValue: string;
  optionText: string;
  dropDownName: string;
}

export const SelectDropDown = ({
  options,
  optionValue,
  optionText,
  dropDownName,
}: SelectDropDownProps) => {
  return (
    <>
      <select name={dropDownName}>
        {options.map((option) => {
          if (typeof option === "object") {
            return (
              <option key={uuidv4()} value={optionValue}>
                {option[optionText]}
              </option>
            );
          } else {
            return <option key={uuidv4()}>{option}</option>;
          }
        })}
      </select>
    </>
  );
};
