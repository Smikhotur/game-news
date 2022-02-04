import React from 'react';
import { useTranslation } from 'react-i18next';
import S from './styles';
import email from '../../assets/images/email.png';
import password from '../../assets/images/password.png';

const FormLogin = () => {
  const { t } = useTranslation(['common']);

  return (
    <S.Form action="">
      <S.TitleForm>{t('login')}</S.TitleForm>
      <S.LabelEmail htmlFor="">
        <S.InputEmail type="email" placeholder={t('email_placeholder')} />
        <img src={email} alt="" />
      </S.LabelEmail>
      <S.LabelLogin htmlFor="">
        <S.InputLogin type="password" placeholder={t('login_placeholder')} />
        <img src={password} alt="" />
      </S.LabelLogin>
      <S.ButtonWrapper>
        <S.BtnLogin>{t('btn_login')}</S.BtnLogin>
        <S.BtnForgot to="/">{t('btn_forgot')}</S.BtnForgot>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default FormLogin;
