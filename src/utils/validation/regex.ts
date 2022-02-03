export const REGEX = {
  passwordComplex: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
  email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]* [a-z0-9]+.){1,63}[a-z0-9]+$/,
  number: /\d/,
};

export const isEmail = (value: string) => {
  return REGEX.email.test(value);
};

export const isContainNumbers = (param: string) => {
  return REGEX.number.test(param);
};
