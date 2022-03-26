import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stars } from '../Stars/Stars';
import { S } from './styles';

export const InfoGame = ({ gameDetails }) => {
  const { t } = useTranslation(['common']);

  return (
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
      <S.WrapperStars>
        <S.StarsTitle>{t('rate_game')}</S.StarsTitle>
        <Stars />
      </S.WrapperStars>
    </S.InnerInfo>
  );
};
