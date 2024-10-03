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
            return <option value={optionValue}>{option[optionText]}</option>;
          } else {
            return <option>{option}</option>;
          }
        })}
      </select>
    </>
  );
};
