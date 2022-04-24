import email from '../../assets/images/email.png';
import password from '../../assets/images/password.png';
import userInput from '../../assets/images/userInput.png';
import phoneNumber from '../../assets/images/nikname.png';

export const inputsData = [
  {
    icon: userInput,
    placeholder: 'first_name',
    type: 'text',
    name: 'firstName',
  },
  {
    icon: userInput,
    placeholder: 'last_name',
    type: 'text',
    name: 'lastName',
  },
  {
    icon: phoneNumber,
    placeholder: 'phoneNumber',
    type: 'text',
    name: 'phoneNumber',
  },
  {
    icon: email,
    placeholder: 'email_placeholder',
    type: 'email',
    name: 'email',
  },
  {
    icon: password,
    placeholder: 'login_placeholder',
    type: 'password',
    name: 'password',
  },
  {
    icon: password,
    placeholder: 'login_retype',
    type: 'password',
    name: 'retypePassword',
  },
];
