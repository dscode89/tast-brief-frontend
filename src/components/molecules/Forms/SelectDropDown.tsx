import { v4 as uuidv4 } from "uuid";
import { StyledSelectDropdownBox } from "../../styled/Forms/StyledSelectDropdownBox";
import { SetStateAction } from "react";

interface SelectDropDownProps {
  options: { [key: string]: string | number }[] | string[] | number[];
  optionValue: string;
  optionText: string;
  dropDownName: string;
  isDialCode?: boolean;
  value: string | number;
  isValid: boolean;
  setIsValid: React.Dispatch<SetStateAction<boolean>>;
  id: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export const SelectDropDown = ({
  isValid,
  setIsValid,
  options,
  optionValue,
  optionText,
  dropDownName,
  isDialCode,
  value,
  id,
  onChange,
}: SelectDropDownProps) => {
  return (
    <>
      <StyledSelectDropdownBox
        value={value}
        $isValid={isValid}
        onBlur={() => setIsValid(true)}
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
