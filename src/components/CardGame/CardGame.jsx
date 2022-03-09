import React from 'react';
import { useTranslation } from 'react-i18next';
import { S } from './styles';

const CardGame = ({ game }) => {
  const { t } = useTranslation(['common']);

  return (
    <S.BoxCard>
      <img src={game?.image} alt="" />
      <S.TitleCard>{game?.name}</S.TitleCard>
      <S.TextCard>{t('release_date')}</S.TextCard>
      <S.SubtitleCard>{game?.releaseDate}</S.SubtitleCard>
      <S.TextCard>{t('platforms')}</S.TextCard>
      <S.SubtitleCard>{game?.platforms}</S.SubtitleCard>
      <S.TextCard>{t('website')}</S.TextCard>
      <a href={game?.website} target="_blank" rel="noopener noreferrer">
        {game?.website.slice(0, 35) + '...'}
      </a>
      <S.TextCard>{t('rating')}</S.TextCard>
      <S.SubtitleCard>{game?.rating}</S.SubtitleCard>
    </S.BoxCard>
  );
};

export default CardGame;
