import React from 'react';
import { useHistory } from 'react-router-dom';
import CardGame from '../../components/CardGame/CardGame';
import { ROUTE_DETAILS_PAGE } from '../../CONST/list-local-routs/list-routes-public';
import data from './data.json';
import { S } from './styles';

const BestSeriesGames = () => {
  const history = useHistory();

  const findHref = ({ target }) => {
    if (target.href === undefined) {
      history.push(ROUTE_DETAILS_PAGE.path);
    }
  };

  return (
    <S.WrapperList>
      <S.InnerDetails>
        <S.CardInner>
          {data.map((game, index) => (
            <S.Card onClick={findHref} key={index}>
              <CardGame game={game} />
            </S.Card>
          ))}
        </S.CardInner>
      </S.InnerDetails>
    </S.WrapperList>
  );
};

export default BestSeriesGames;
