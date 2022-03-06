import React from 'react';
import { S } from './styles';

const Card = ({ image, name }) => {
  return (
    <S.Card>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </S.Card>
  );
};

export default Card;
