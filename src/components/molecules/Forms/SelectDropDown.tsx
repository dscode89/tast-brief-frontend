import { v4 as uuidv4 } from "uuid";
import { StyledSelectDropdownBox } from "../../styled/Forms/StyledSelectDropdownBox";

interface SelectDropDownProps {
  options: { [key: string]: string | number }[] | string[] | number[];
  optionValue: string;
  optionText: string;
  dropDownName: string;
  isDialCode?: boolean;
  isGrouped: boolean;
  value: string | number;
  isValid: boolean;
  id: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export const SelectDropDown = ({
  isValid,
  options,
  optionValue,
  optionText,
  dropDownName,
  isDialCode,
  value,
  id,
  isGrouped,
  onChange,
}: SelectDropDownProps) => {
  return (
    <>
      <StyledSelectDropdownBox
        $grouped={isGrouped}
        value={value}
        $isValid={isValid}
        onChange={onChange}
        name={dropDownName}
        id={id}
      >
        {options.map((option) => {
          if (typeof option === "object") {
            return (
              <option key={uuidv4()} value={option[optionValue]}>
                {isDialCode
                  ? `${option.area} (${option.code})`
                  : option[optionText]}
              </option>
            );
          } else {
            return <option key={uuidv4()}>{option}</option>;
          }
        })}
      </StyledSelectDropdownBox>
    </>
  );
};
