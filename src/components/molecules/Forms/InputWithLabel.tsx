import { BorderBottomTextInput } from "../../styled/Forms/Inputs/BorderBottomTextInput";
import { RequiredInputLabel } from "../../styled/Typography/RequiredInputLabel";
import { GenericLabel } from "../../styled/Forms/GenericLabel";

export interface InputWithLabelProps {
  isActive: boolean;
  isValid: boolean;
  labelText: string;
  labelFor: string;
  inputId: string;
  isRequired: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

export const InputWithLabel = ({
  isActive,
  isValid,
  labelFor,
  labelText,
  inputId,
  isRequired,
  onChange,
  children,
}: InputWithLabelProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
      }}
    >
      {isRequired ? (
        <RequiredInputLabel htmlFor={labelFor} labelText={labelText} />
      ) : (
        <GenericLabel htmlFor={labelFor}>{labelText}</GenericLabel>
      )}

      {labelText === "Password" ? (
        <BorderBottomTextInput
          required={isRequired}
          $isActive={isActive}
          $isValid={isValid}
          id={inputId}
          type="password"
          onChange={onChange}
        />
      ) : (
        <BorderBottomTextInput
          required={isRequired}
          $isActive={isActive}
          $isValid={isValid}
          id={inputId}
          onBlur={onChange}
        />
      )}

      {children}
    </div>
  );
};
