import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { colors } from '../../CONST/colors';
import {
  getBestSeriesGamesIsLoading,
  getGameDetails,
} from '../../selectors/selector-games';
import { gameDetailsAsync } from '../../services/async-api-games';
import { S } from './styles';
import { Oval } from 'react-loader-spinner';
import { HTTP_REQUEST_STATUS } from '../../CONST/http-request-status';
import { useTranslation } from 'react-i18next';

const DetailsGame = () => {
  const [pending, setPending] = useState('');
  const [count, setCount] = useState(0);
  const { params } = useRouteMatch();
  const dispatch = useDispatch();
  const gameDetails = useSelector(getGameDetails);
  const isLoading = useSelector(getBestSeriesGamesIsLoading);
  const { t } = useTranslation(['common']);

  useEffect(async () => {
    (async () => {
      const result = await dispatch(gameDetailsAsync(params));
      setPending(result.meta.requestStatus);
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
            <S.InnerInfo>
              <img src={gameDetails?.thumbnail} alt="" />
              <S.Info>
                <S.InfoBigTitle>{t('system_requirements')}:</S.InfoBigTitle>
                <S.InfoTitle>{t('graphics')}</S.InfoTitle>
                <S.InfoSubtitle>
                  {gameDetails?.minimum_system_requirements.graphics}
                </S.InfoSubtitle>
                <S.InfoTitle>{t('memory')}</S.InfoTitle>
                <S.InfoSubtitle>
                  {gameDetails?.minimum_system_requirements.memory}
                </S.InfoSubtitle>
                <S.InfoTitle>{t('os')}</S.InfoTitle>
                <S.InfoSubtitle>
                  {gameDetails?.minimum_system_requirements.os}
                </S.InfoSubtitle>

                <S.InfoTitle>{t('processor')}</S.InfoTitle>
                <S.InfoSubtitle>
                  {gameDetails?.minimum_system_requirements.processor}
                </S.InfoSubtitle>

                <S.InfoTitle>{t('storage')}</S.InfoTitle>
                <S.InfoSubtitle>
                  {gameDetails?.minimum_system_requirements.storage}
                </S.InfoSubtitle>
              </S.Info>
            </S.InnerInfo>
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
