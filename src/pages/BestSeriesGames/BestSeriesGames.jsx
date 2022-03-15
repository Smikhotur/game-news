import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CardGame from '../../components/CardGame/CardGame';
import { ROUTE_DETAILS_PAGE } from '../../CONST/list-local-routs/list-routes-public';
import {
  getBestSeriesGames,
  getBestSeriesGamesError,
  getBestSeriesGamesIsLoading,
} from '../../selectors/selector-games';
import { seriesGames } from '../../services/async-api-games';
import { S } from './styles';
import { Oval } from 'react-loader-spinner';
import { HTTP_REQUEST_STATUS } from '../../CONST/http-request-status';

const BestSeriesGames = () => {
  const [pending, setPending] = useState('');
  const bestSeriesGames = useSelector(getBestSeriesGames);
  const isLoading = useSelector(getBestSeriesGamesIsLoading);
  const isError = useSelector(getBestSeriesGamesError);
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    (async () => {
      const result = await dispatch(seriesGames(match.params.nameGame));
      setPending(result.meta.requestStatus);
    })();
  }, [match.params.nameGame]);

  const findHref = ({ target }) => {
    if (target.href === undefined) {
      history.push(ROUTE_DETAILS_PAGE.path);
    }
  };

  console.log(isError);

  return (
    <S.WrapperList>
      <S.InnerDetails>
        {!isLoading ? (
          <S.CardInner>
            {pending === HTTP_REQUEST_STATUS.FULFILLED &&
              bestSeriesGames.map((game, index) => (
                <S.Card onClick={findHref} key={index}>
                  <CardGame game={game} />
                </S.Card>
              ))}
          </S.CardInner>
        ) : (
          <S.InnerOval>
            <Oval color="#ff1b1b" height={80} width={80} />
          </S.InnerOval>
        )}
      </S.InnerDetails>
    </S.WrapperList>
  );
};

export default BestSeriesGames;
