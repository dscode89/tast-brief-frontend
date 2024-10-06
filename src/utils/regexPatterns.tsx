const regexPatterns: { [key: string]: RegExp } = {
  fullName: /^(?=.*[a-zA-Z]).*$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,12}$/,
  email: /^[\w-\.+-_~!$%&'/{}^=]+@[\w-]{2,}\.[\w]{2,10}(\.[\w]{2,5})?$/,
};

export default regexPatterns;
