import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormikWrapper from '../../components/FormikWrapper/FormikWrapper';
import FormLogin from '../../components/FormLogin/FormLogin';
import { loginSchema } from '../../validations/validationLogin';
import google from '../../assets/images/google.png';
import face from '../../assets/images/face.png';
import S from './styles';
import {
  ROUTE_HOME_PAGE,
  ROUTE_REGISTRATION_PAGE,
} from '../../CONST/list-local-routs/list-routes-public';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux-slices/auth-slice';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();
  const history = useHistory();
  const [initialValueLogin] = useState({
    email: '',
    password: '',
  });

  const handleSubmitLogin = async (data) => {
    const promise = await dispatch(loginUser(data));
    console.log(promise);
    promise?.payload?.token ? history.push(ROUTE_HOME_PAGE.path) : null;
  };

  return (
    <S.ContainerInner>
      <S.WrapperLogin>
        <S.LoginTitle>{t('login')}</S.LoginTitle>
        <S.LoginSubTitle>{t('subtitle_login')}</S.LoginSubTitle>
        <S.FormsWrapper>
          <FormikWrapper
            initialValues={initialValueLogin}
            Component={FormLogin}
            handleSubmit={handleSubmitLogin}
            validationSchema={loginSchema}
          />
          <S.DontHaveWrapper>
            <S.TitleForm>{t('dont_have')}</S.TitleForm>
            <S.BtnRegistration to={ROUTE_REGISTRATION_PAGE.path}>
              {t('btn_registration')}
            </S.BtnRegistration>
          </S.DontHaveWrapper>
        </S.FormsWrapper>
      </S.WrapperLogin>
      <S.LargeButtonWrapper>
        <S.ButtonFacebook>
          <img src={face} alt="" />
          {t('btn_facebook')}
        </S.ButtonFacebook>
        <S.ButtonGoogle>
          <img src={google} alt="" />
          {t('btn_google')}
        </S.ButtonGoogle>
      </S.LargeButtonWrapper>
    </S.ContainerInner>
  );
};

export default LoginPage;
