import React, { useState } from 'react';
import SLOGIN from '../LoginPage/styles';
import FormikWrapper from '../../components/FormikWrapper/FormikWrapper';
import FormRegistration from '../../components/FormRegistration/FormRegistration';
import { SignUpSchema } from '../../validations/validationSignUp';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux-slices/auth-slice';
import { ROUTE_HOME_PAGE } from '../../CONST/list-local-routs/list-routes-public';
import { useHistory } from 'react-router';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [initialValueRegistration] = useState({
    email: '',
    password: '',
    retypePassword: '',
    nikname: '',
    lastName: '',
    firstName: '',
    file: '',
  });

  const handleSubmitLogin = async (data) => {
    const promise = await dispatch(registerUser(data));
    promise?.payload?.accessToken ? history.push(ROUTE_HOME_PAGE.path) : null;
  };

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
