import { BorderBottomTextInput } from "../../styled/Forms/Inputs/BorderBottomTextInput";

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
      <label
        htmlFor={labelFor}
        style={{ fontSize: "0.7rem", fontWeight: "700", marginTop: "0.8rem" }}
      >
        {labelText}
      </label>
      {inputId === "password" ? (
        <BorderBottomTextInput
          required={isRequired}
          $isActive={isActive}
          $isValid={isValid}
          id={inputId}
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
