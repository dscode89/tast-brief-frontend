interface ErrorMessageProps {
  children: React.ReactNode;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p style={{ color: "#FAA0A0", fontSize: "0.7rem", fontWeight: 500 }}>
      &#8226; {children}
    </p>
  );
};
