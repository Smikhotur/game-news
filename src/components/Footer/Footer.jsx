import React from 'react';
import { S } from './styles';
import logo from '../../assets/images/logoSmall.png';
import leftImage from '../../assets/images/footer/f-left.png';
import rightImage from '../../assets/images/footer/f-right.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(['common']);

  return (
    <S.WrapperFooter>
      <S.TransformSkew></S.TransformSkew>
      <S.InnerImages>
        <S.ImageLeft src={leftImage} alt="" />
        <S.ImageRight src={rightImage} alt="" />
      </S.InnerImages>
      <S.LinkFooter>{t('about_us')}</S.LinkFooter>
      <S.LogoImg src={logo} alt="" />
      <S.LinkFooter>{t('contacts')}</S.LinkFooter>
      <S.CooryFooter>© 2021-2022</S.CooryFooter>
    </S.WrapperFooter>
  );
};

export default Footer;
