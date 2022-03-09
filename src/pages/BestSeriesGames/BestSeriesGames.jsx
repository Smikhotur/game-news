import React from 'react';
import CardGame from '../../components/CardGame/CardGame';
import { S } from './styles';

const BestSeriesGames = () => {
  return (
    <S.WrapperList>
      <S.InnerDetails>
        <S.CardInner>
          {[...Array(8).keys()].map((game, index) => (
            <S.Card key={index}>
              <CardGame />
            </S.Card>
          ))}
        </S.CardInner>
      </S.InnerDetails>
    </S.WrapperList>
  );
};

export default BestSeriesGames;
