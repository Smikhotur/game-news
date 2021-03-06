import React from 'react';
import { useTranslation } from 'react-i18next';
import S from './styles';
import email from '../../assets/images/email.png';
import password from '../../assets/images/password.png';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import { useSelector } from 'react-redux';
import {
  getIsLoadingSelector,
  getMessageSelector,
} from '../../selectors/selector-auth-user';
import { BallTriangle } from 'react-loader-spinner';

const FormLogin = ({ formik }) => {
  const isLoading = useSelector(getIsLoadingSelector);
  const { t } = useTranslation(['common']);
  const message = useSelector(getMessageSelector);

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.TitleForm>{t('login')}</S.TitleForm>
      <S.LabelEmail htmlFor="">
        <S.InputEmail
          type="email"
          placeholder={t('email_placeholder')}
          name="email"
          value={formik.values.email.trim()}
          onChange={formik.handleChange}
        />
        <img src={email} alt="" />
        {formik.errors.email ? <ErrorMsg msg={t(formik.errors.email)} /> : ''}
        {!formik.errors.email && message ? <ErrorMsg msg={t(message)} /> : ''}
      </S.LabelEmail>
      <S.LabelLogin htmlFor="">
        <S.InputLogin
          type="password"
          name="password"
          placeholder={t('login_placeholder')}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <img src={password} alt="" />
        {formik.errors.password ? (
          <ErrorMsg msg={t(formik.errors.password)} />
        ) : (
          ''
        )}
      </S.LabelLogin>
      <S.ButtonWrapper>
        <S.BtnLogin type="submit">
          {isLoading ? (
            <S.InnerSpinner>
              <BallTriangle color="#211d2e" height={30} width={30} />
            </S.InnerSpinner>
          ) : (
            t('btn_login')
          )}
        </S.BtnLogin>
        <S.BtnForgot to="/">{t('btn_forgot')}</S.BtnForgot>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default FormLogin;
