import { REGEX } from '.';

export const mobilePhoneRules = [
  {
    required: true,
    message: 'Please enter phone number',
  },
  {
    pattern: REGEX.passwordComplexPattern,
    message: 'Phone number format is not correct',
  },
];
