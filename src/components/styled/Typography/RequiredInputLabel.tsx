import { GenericLabel } from "../Forms/GenericLabel";

interface RequiredInputLabelProps {
  htmlFor: string;
  labelText: string;
}

export const RequiredInputLabel = ({
  htmlFor,
  labelText,
}: RequiredInputLabelProps) => {
  return (
    <GenericLabel htmlFor={htmlFor}>
      {labelText}
      <span style={{ color: "red" }}> *</span>
    </GenericLabel>
  );
};
