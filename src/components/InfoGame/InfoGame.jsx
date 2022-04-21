import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { getCurrentUser } from '../../helpers/getAuthUser';
import { getStarsSelector } from '../../selectors/selector-games';
import { getStarsAsync } from '../../services/async-api-games';
import { Stars } from '../Stars/Stars';
import { S } from './styles';

export const InfoGame = ({ best, gameDetails }) => {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const info = ['graphics', 'memory', 'os', 'processor', 'storage'];
  const stars = useSelector(getStarsSelector);

  useEffect(() => {
    dispatch(
      getStarsAsync({
        id_user: getCurrentUser().user.id,
        id_game: match.params.id,
      })
    );
  }, [match.params.id]);

  const defineObject = () => {
    if (best) {
      return (
        <>
          {info.map((el, index) => (
            <div key={index}>
              <S.InfoTitle>{t(el)}</S.InfoTitle>
              <S.InfoSubtitle>
                {gameDetails?.minimum_system_requirements[0][el]}
              </S.InfoSubtitle>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {info.map((el, index) => (
            <div key={index}>
              <S.InfoTitle>{t(el)}</S.InfoTitle>
              <S.InfoSubtitle>
                {gameDetails?.minimum_system_requirements[el]}
              </S.InfoSubtitle>
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <S.InnerInfo>
      <img src={gameDetails?.thumbnail} alt="" />
      <S.Info>
        <S.InfoBigTitle>{t('system_requirements')}:</S.InfoBigTitle>
        {defineObject()}
        {best && (
          <S.WrapperStars>
            <S.StarsTitle>
              {t(stars?.rating ? 'your_rate' : 'rate_game')}
            </S.StarsTitle>
            <Stars stars={stars} />
          </S.WrapperStars>
        )}
      </S.Info>
    </S.InnerInfo>
  );
};
