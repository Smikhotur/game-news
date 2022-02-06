import * as Yup from 'yup';
import {
  EMAIL_REGEXP,
  WITHOUT_WHITE_SPACE_REGEXP,
} from '../CONST/regexp-const';
import { MIN_LENGTH_PASSWORD, PERSONAL_DATA } from '../CONST/validationConst';

export const SignUpSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .matches(EMAIL_REGEXP, 'enter_a_valid_email')
    .email('enter_a_valid_email')
    .required('email_is_required'),
  firstName: Yup.string()
    .matches(WITHOUT_WHITE_SPACE_REGEXP, 'cannot_contain_spaces')
    .min(PERSONAL_DATA.minString, 'validation_names')
    .required('first_name_is_required'),
  lastName: Yup.string()
    .matches(WITHOUT_WHITE_SPACE_REGEXP, 'cannot_contain_spaces')
    .min(PERSONAL_DATA.minString, 'validation_names')
    .required('last_name_is_required'),
  nikname: Yup.string()
    .matches(WITHOUT_WHITE_SPACE_REGEXP, 'cannot_contain_spaces')
    .min(PERSONAL_DATA.minString, 'validation_names')
    .required('nikname_is_required'),
  password: Yup.string()
    .min(MIN_LENGTH_PASSWORD, 'validation_length_password')
    .required('password_is_required'),
  retypePassword: Yup.string()
    .required('confirm_password_is_required')
    .oneOf([Yup.ref('password'), null], 'passwords_must_match'),
  acceptTerms: Yup.bool().oneOf([true], 'validation_terms_required'),
});
