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
      <select
        name={dropDownName}
        style={{
          backgroundColor: "#FFFFFF",
          color: "#5dbea3",
          fontWeight: "600",
          border: "2px solid #5dbea3",
          padding: "0.5em",
          marginRight: "0.5em",
          marginTop: "0.25em",
        }}
      >
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
