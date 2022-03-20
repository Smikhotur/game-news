import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HTTP_REQUEST_STATUS } from '../../CONST/http-request-status';
import {
  getAllGames,
  getBestSeriesGamesIsLoading,
} from '../../selectors/selector-games';
import { allGamesAsync } from '../../services/async-api-games';
import Style from './styles';
import { S } from '../BestSeriesGames/styles';
import { Oval } from 'react-loader-spinner';
import { ROUTE_DETAILS_PAGE } from '../../CONST/list-local-routs/list-routes-public';
import { useRouteMatch } from 'react-router-dom';
import { CardAllGame } from '../../components/CardAllGame/CardAllGame';
import { useHistory } from 'react-router-dom';

const GamesAllPage = () => {
  const [pending, setPending] = useState('');
  const isLoading = useSelector(getBestSeriesGamesIsLoading);
  const allGames = useSelector(getAllGames);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(async () => {
    (async () => {
      const result = await dispatch(allGamesAsync());
      setPending(result.meta.requestStatus);
    })();
  }, []);

  const findHref = ({ target }) => {
    if (target.href === undefined) {
      history.push(ROUTE_DETAILS_PAGE.path);
    }
  };

  console.log(pending);

  return (
    <Style.Container>
      <Style.Wrapper>
        {isLoading ? (
          <>
            <S.TitleSeries>{match.params.nameGame}</S.TitleSeries>
            <S.CardInner>
              {pending === HTTP_REQUEST_STATUS.FULFILLED &&
                allGames.map((game, index) => (
                  <S.Card onClick={findHref} key={index}>
                    <CardAllGame game={game} />
                  </S.Card>
                ))}
            </S.CardInner>
          </>
        ) : (
          <S.InnerOval>
            <Oval color="#ff1b1b" height={80} width={80} />
          </S.InnerOval>
        )}
      </Style.Wrapper>
    </Style.Container>
  );
};

export default GamesAllPage;
