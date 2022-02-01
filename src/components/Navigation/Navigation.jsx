import React from 'react';
import { NAVIGATION_LEFT, NAVIGATION_RIGHT } from '../../CONST/navigation-list';
import { S } from '../Navigation/styles';
import logo from '../../assets/images/logo.png';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation(['common']);

  return (
    <S.Nav>
      <S.List>
        {NAVIGATION_LEFT.map((link, key) => (
          <S.Item key={key}>
            <S.Link to={link.link}>{t(link.name)}</S.Link>
          </S.Item>
        ))}
      </S.List>
      <S.List>
        {NAVIGATION_RIGHT.map((link, key) => (
          <S.Item key={key}>
            <S.Link to={link.link}>{t(link.name)}</S.Link>
          </S.Item>
        ))}
      </S.List>
      <img src={logo} alt="" />
    </S.Nav>
  );
};

export default Navigation;
