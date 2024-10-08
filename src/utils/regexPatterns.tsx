const regexPatterns: { [key: string]: RegExp } = {
  nameInput: /(?=[a-zA-Z])^[a-zA-Z'-\s]{2}[a-zA-Z\s'-]{0,29}$/,
  genericTextInput: /^[\S]{1}.{4,29}$/,
  phoneNumber: /^[0-9]{6,9}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,12}$/,
  email: /^[\w-\.+-_~!$%&'/{}^=]+@[\w-]{2,}\.[\w]{2,10}(\.[\w]{2,5})?$/,
};

export default regexPatterns;
