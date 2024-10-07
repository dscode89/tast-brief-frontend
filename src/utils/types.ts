//FORM TYPES
interface FormField {
  value: string;
  isActive: boolean;
  isValid: boolean;
}

export type FormFieldInputs = Readonly<Record<string, FormField>>;
