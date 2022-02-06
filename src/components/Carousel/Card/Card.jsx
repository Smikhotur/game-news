import React from 'react';
import { S } from './styles';

function Card({ image, name }) {
  return (
    <S.Card>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </S.Card>
  );
}

export default Card;
