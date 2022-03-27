import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stars } from '../Stars/Stars';
import { S } from './styles';

export const InfoGame = ({ best, gameDetails }) => {
  const { t } = useTranslation(['common']);

  const info = ['graphics', 'memory', 'os', 'processor', 'storage'];

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
      </S.Info>
      {best && (
        <S.WrapperStars>
          <S.StarsTitle>{t('rate_game')}</S.StarsTitle>
          <Stars />
        </S.WrapperStars>
      )}
    </S.InnerInfo>
  );
};
