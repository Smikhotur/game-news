import React, { useState } from 'react';
import { S } from './styles';
import { socials } from '../../CONST/dataSocial';
import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import userBig from '../../assets/images/userBig.png';
import Navigation from '../Navigation/Navigation';
import { useTranslation } from 'react-i18next';
import { LOCALE } from '../../CONST/keys-localeStorage';
import { DEFAULT_LOCALE } from '../../CONST/locales';
import { ROUTE_LOGIN_PAGE } from '../../CONST/list-local-routs/list-routes-public';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from '../../selectors/selector-auth-user';
import { logoutUser } from '../../redux-slices/auth-slice';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation(['common']);
  const { i18n } = useTranslation('common');
  const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  const toSwitchLang = () => {
    i18n.changeLanguage(lang === 'en' ? 'ru' : 'en');
  };

  const toOpenModal = () => {
    setOpenModal(!openModal);
  };

  const onLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <S.Header>
      <S.BtnInner>
        <S.ButtonBox>
          {socials.map((social, key) => (
            <S.BtnSocial type="button" key={key}>
              <a href={social.link} rel="noopener noreferrer" target="_blank">
                <img src={social.image} alt="" />
              </a>
            </S.BtnSocial>
          ))}
          <img src={search} alt="search" />
          <S.InputSearch type="text" placeholder={t('site_search')} />
        </S.ButtonBox>
        <S.BtnRegistrationInner>
          {!isAuth ? (
            <S.LoginLink to={ROUTE_LOGIN_PAGE.path}>
              <S.BtnSocial type="button">
                <img src={user} alt="" />
              </S.BtnSocial>
            </S.LoginLink>
          ) : (
            <S.Settings onClick={toOpenModal}>
              <img src={userBig} alt="" />
              {openModal && (
                <S.ModalLogOut>
                  <S.CloseModal onClick={toOpenModal}>X</S.CloseModal>
                  <S.Item>Personal office</S.Item>
                  <S.Item>Settings</S.Item>
                  <S.Item>Notification</S.Item>
                  <S.Item>Your rating</S.Item>
                  <S.Item onClick={onLogOut}>Log out</S.Item>
                </S.ModalLogOut>
              )}
            </S.Settings>
          )}
          <S.SelectLanguage onChange={toSwitchLang}>
            <option value="RU">EN</option>
            <option value="EN">RU</option>
          </S.SelectLanguage>
        </S.BtnRegistrationInner>
      </S.BtnInner>
      <Navigation />
      <S.TransformSkew></S.TransformSkew>
    </S.Header>
  );
};

export default Header;
