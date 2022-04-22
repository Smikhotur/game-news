import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CardGame from '../../components/CardGame/CardGame';
import { ROUTE_DETAILS_PAGE } from '../../CONST/list-local-routs/list-routes-public';
import {
  getBestSeriesGames,
  getBestSeriesGamesIsLoading,
} from '../../selectors/selector-games';
import { seriesGames } from '../../services/async-api-games';
import { S } from './styles';
import { Oval } from 'react-loader-spinner';
import { HTTP_REQUEST_STATUS } from '../../CONST/http-request-status';
import { colors } from '../../CONST/colors';

const BestSeriesGames = () => {
  const [pending, setPending] = useState('');
  const bestSeriesGames = useSelector(getBestSeriesGames);
  const isLoading = useSelector(getBestSeriesGamesIsLoading);
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    if (match.params.nameGame) {
      (async () => {
        const result = await dispatch(seriesGames(match.params.nameGame));
        setPending(result.meta.requestStatus);
      })();
    }
  }, [match.params.nameGame]);

  const findHref = ({ target }, id) => {
    if (target.href === undefined) {
      history.push(`${ROUTE_DETAILS_PAGE.path}/${id}`);
    }
  };

  return (
    <S.WrapperList>
      <S.InnerDetails>
        {!isLoading ? (
          <>
            <S.TitleSeries>{match.params.nameGame}</S.TitleSeries>
            <S.CardInner>
              {pending === HTTP_REQUEST_STATUS.FULFILLED &&
                bestSeriesGames.map((game, index) => (
                  <S.Card onClick={(e) => findHref(e, game._id)} key={index}>
                    <CardGame game={game} />
                  </S.Card>
                ))}
            </S.CardInner>
          </>
        ) : (
          <S.InnerOval>
            <Oval
              secondaryColor={colors.blackBlue}
              color={colors.orange}
              height={80}
              width={80}
            />
          </S.InnerOval>
        )}
      </S.InnerDetails>
    </S.WrapperList>
  );
};

export default BestSeriesGames;
