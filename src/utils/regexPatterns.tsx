export const regexPatterns: { [key: string]: string } = {
  nameInputs: `/^[a-zA-Z]{2}[a-zA-Z]{0,48}$/`,
  password: `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,12}$
`,
};
