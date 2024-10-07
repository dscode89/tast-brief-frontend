import { ErrorContainer } from "../../styled/Errors/FormErrorContainer";

interface FormErrorContainerProps {
  children: React.ReactNode;
}

export const FormErrorContainer = ({ children }: FormErrorContainerProps) => {
  return (
    <ErrorContainer>
      {children}
      <div
        style={{
          backgroundColor: "#FAA0A0",
          width: "10px",
          height: "10px",
          transform: "rotate(45deg)",
          position: "absolute",
          top: -2,
          left: 5,
        }}
      ></div>
    </ErrorContainer>
  );
};
