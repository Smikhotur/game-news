import React, { useState } from 'react';
import SLOGIN from '../LoginPage/styles';
import FormikWrapper from '../../components/FormikWrapper/FormikWrapper';
import FormRegistration from '../../components/FormRegistration/FormRegistration';
import { SignUpSchema } from '../../validations/validationSignUp';

const RegisterPage = () => {
  const [initialValueRegistration] = useState({
    email: '',
    password: '',
    retypePassword: '',
    nikname: '',
    lastName: '',
    firstName: '',
    file: '',
  });

  const handleSubmitLogin = () => {};

  return (
    <SLOGIN.ContainerInner>
      <FormikWrapper
        initialValues={initialValueRegistration}
        Component={FormRegistration}
        handleSubmit={handleSubmitLogin}
        validationSchema={SignUpSchema}
      />
    </SLOGIN.ContainerInner>
  );
};

export default RegisterPage;
