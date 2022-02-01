import * as Yup from 'yup';
import { MIN_LENGTH_PASSWORD } from '../CONST/validationConst';

export const loginSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('enter_a_valid_email')
    .required('email_is_required'),
  password: Yup
    .string()
    .min(MIN_LENGTH_PASSWORD, 'validation_length_password')
    .required('password_is_required')
});