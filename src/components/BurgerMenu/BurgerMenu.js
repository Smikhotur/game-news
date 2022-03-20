import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBurgerMenu } from '../../selectors/selector-management';
import closeImg from '../../assets/images/close.png';
import logo from '../../assets/images/logoSmall.png';
import { S } from './styles';
import { setBurgerMenu } from '../../redux-slices/management-ui-slice';
import { NAVIGATION_LEFT, NAVIGATION_RIGHT } from '../../CONST/navigation-list';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import useOnOutsideClick from '../../custom-hooks/useOnOutsideClick';
import { LOCALE } from '../../CONST/keys-localeStorage';
import { DEFAULT_LOCALE, EN, RU } from '../../CONST/locales';

export const BurgerMenu = () => {
  const { t } = useTranslation(['common']);
  const burgerMenuOpen = useSelector(getBurgerMenu);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { i18n } = useTranslation('common');
  const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;
  const { innerBorderRef } = useOnOutsideClick(() => dispatch(setBurgerMenu()));

  const closeMenu = () => {
    dispatch(setBurgerMenu());
  };

  const toSwitchLang = () => {
    i18n.changeLanguage(lang === EN ? RU : EN);
  };

  return (
    <S.WrapperBurger
      ref={innerBorderRef}
      translateX={burgerMenuOpen ? '0' : '-100%'}
    >
      <S.InnerHeader>
        <S.Logo src={logo} />
        <S.CloseImg onClick={closeMenu} src={closeImg} />
      </S.InnerHeader>
      <S.List>
        <S.SelectLanguage
          defaultValue={lang !== EN ? 'EN' : 'RU'}
          onChange={toSwitchLang}
        >
          <option value="RU">EN</option>
          <option value="EN">RU</option>
        </S.SelectLanguage>
        {NAVIGATION_LEFT.map((link, index) => (
          <S.Link onClick={closeMenu} to={link.link} key={index}>
            <S.Inner>
              <S.Icon
                src={
                  pathname.match(link.name) && pathname.length !== 1
                    ? link.iconHover
                    : pathname.length === 1 &&
                      link.name === NAVIGATION_LEFT[0].name
                    ? link.iconHover
                    : link.icon
                }
              />
              <S.Item
                home={(
                  pathname.length === 1 && link.name === NAVIGATION_LEFT[0].name
                ).toString()}
                coloractive={pathname.match(link.name)}
              >
                {t(link.name)}
              </S.Item>
            </S.Inner>
          </S.Link>
        ))}
        {NAVIGATION_RIGHT.map((link, index) => (
          <S.Link to={link.link} key={index}>
            <S.Inner>
              <S.Icon
                src={pathname.match(link.name) ? link.iconHover : link.icon}
              />
              <S.Item coloractive={pathname.match(link.name)}>
                {t(link.name)}
              </S.Item>
            </S.Inner>
          </S.Link>
        ))}
      </S.List>
    </S.WrapperBurger>
  );
};
