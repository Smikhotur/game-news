import React from 'react';
import { S } from './styles';
import { socials } from '../../CONST/dataSocial';
import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import Navigation from '../Navigation/Navigation';
import { useTranslation } from 'react-i18next';
import { LOCALE } from '../../CONST/keys-localeStorage';
import { DEFAULT_LOCALE } from '../../CONST/locales';
import { ROUTE_LOGIN_PAGE } from '../../CONST/list-local-routs/list-routes-public';

const Header = () => {
  const { t } = useTranslation(['common']);
  const { i18n } = useTranslation('common');

  const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;

  const toSwitchLang = () => {
    i18n.changeLanguage(lang === 'en' ? 'ru' : 'en');
    console.log(lang);
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
          <S.LoginLink to={ROUTE_LOGIN_PAGE.path}>
            <S.BtnSocial type="button">
              <img src={user} alt="" />
            </S.BtnSocial>
          </S.LoginLink>
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
