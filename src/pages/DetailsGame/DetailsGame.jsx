import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { colors } from '../../CONST/colors';
import {
  getBestSeriesGamesIsLoading,
  getGameDetails,
} from '../../selectors/selector-games';
import {
  gameDetailsAsync,
  seriesGameDetails,
} from '../../services/async-api-games';
import { S } from './styles';
import { Oval } from 'react-loader-spinner';
import { HTTP_REQUEST_STATUS } from '../../CONST/http-request-status';
import { InfoGame } from '../../components/InfoGame/InfoGame';
import { Comments } from '../../components/Comments/Comments';

const DetailsGame = () => {
  const [pending, setPending] = useState('');
  const [count, setCount] = useState(0);
  const [best, setBest] = useState(false);
  const { params } = useRouteMatch();
  const dispatch = useDispatch();
  const gameDetails = useSelector(getGameDetails);
  const isLoading = useSelector(getBestSeriesGamesIsLoading);

  useEffect(async () => {
    (async () => {
      if (params.id.length > 5) {
        setBest(true);
        const result = await dispatch(seriesGameDetails(params.id));
        setPending(result.meta.requestStatus);
      } else {
        const result = await dispatch(gameDetailsAsync(params));
        setPending(result.meta.requestStatus);
      }
    })();
  }, []);

  const nextImage = () => {
    console.log('count', count);
    if (count + 1 < gameDetails?.screenshots.length) {
      setCount((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (count >= 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <S.ContainerDetails>
      <S.InnerDetails>
        {!isLoading && pending === HTTP_REQUEST_STATUS.FULFILLED ? (
          <>
            <S.InnerSlide img={gameDetails?.screenshots[count].image}>
              <S.ButtonLeftInner>
                <S.ButtonLeft onClick={prevImage}></S.ButtonLeft>
              </S.ButtonLeftInner>

              <S.ButtonRightInner>
                <S.ButtonRight onClick={nextImage}></S.ButtonRight>
              </S.ButtonRightInner>
              <S.InnerPoints
                number={(10 * gameDetails?.screenshots.length) / 2}
              >
                {[...Array(gameDetails?.screenshots.length).keys()].map(
                  (el) => (
                    <S.Point
                      color={count === el ? colors.orange : colors.white}
                      key={el}
                    ></S.Point>
                  )
                )}
              </S.InnerPoints>
            </S.InnerSlide>
            <S.Title>{gameDetails?.title}</S.Title>
            <S.Subtitle>{gameDetails?.description}</S.Subtitle>
            <InfoGame best={best} gameDetails={gameDetails} />
            {best && <Comments id_game={params.id} />}
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
    </S.ContainerDetails>
  );
};

export default DetailsGame;
