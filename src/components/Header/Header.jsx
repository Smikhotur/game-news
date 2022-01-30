import React from 'react';
import { S } from './styles';
import logo from '../../assets/images/logo.png';
const Header = () => {
  return (
    <S.Header>
      <img src={logo} alt="" />
      <S.TransformSkew></S.TransformSkew>
    </S.Header>
  );
};

export default Header;
