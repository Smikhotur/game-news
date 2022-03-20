import React from 'react';
import { NAVIGATION_LEFT, NAVIGATION_RIGHT } from '../../CONST/navigation-list';
import { S } from '../Navigation/styles';
import logo from '../../assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { ROUTE_HOME_PAGE } from '../../CONST/list-local-routs/list-routes-public';
import search from '../../assets/images/search.png';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const { t } = useTranslation(['common']);
  const { pathname } = useLocation();

  return (
    <S.Nav>
      <S.List>
        {NAVIGATION_LEFT.map((link, key) => (
          <S.Item key={key}>
            <S.Link
              home={(
                pathname.length === 1 && link.name === NAVIGATION_LEFT[0].name
              ).toString()}
              coloractive={pathname.match(link.name)}
              to={link.link}
            >
              {t(link.name)}
            </S.Link>
          </S.Item>
        ))}
      </S.List>
      <S.List>
        {NAVIGATION_RIGHT.map((link, key) => (
          <S.Item key={key}>
            <S.Link
              home={(
                pathname.length === 1 && link.name === NAVIGATION_LEFT[0].name
              ).toString()}
              coloractive={pathname.match(link.name)}
              to={link.link}
            >
              {t(link.name)}
            </S.Link>
          </S.Item>
        ))}
      </S.List>
      <S.LinkHome to={ROUTE_HOME_PAGE.path}>
        <img src={logo} alt="logo site" />
        <div>
          <img src={search} alt="search" />
          <input type="text" placeholder={t('site_search')} />
        </div>
      </S.LinkHome>
    </S.Nav>
  );
};

export default Navigation;
