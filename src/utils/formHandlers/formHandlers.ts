import { SetStateAction } from "react";
import regexPatterns from "../regexPatterns";
import { FormFieldInputs } from "../types";

export const handleRegistrationFormChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setFormFields: React.Dispatch<SetStateAction<FormFieldInputs>>
) => {
  e.preventDefault();

  const specificInput = e.target.id.split("-")[1];
  let specificRegex = "";

  if (specificInput === "firstName" || specificInput === "lastName") {
    specificRegex = "nameInput";
  } else if (specificInput === "password" || specificInput === "email") {
    specificRegex = specificInput;
  } else {
    specificRegex = "genericTextInput";
  }

  setFormFields((current) => {
    return {
      ...current,
      [specificInput]: {
        isActive:
          e.target.nodeName === "SELECT" ? true : e.target.value ? true : false,
        value: e.target.value,
        isValid:
          e.target.nodeName === "SELECT"
            ? true
            : regexPatterns[specificRegex].test(e.target.value),
      },
    };
  });
};
