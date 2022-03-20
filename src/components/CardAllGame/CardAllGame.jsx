import React from 'react';
import { useTranslation } from 'react-i18next';
import { S } from '../CardGame/styles';

export const CardAllGame = ({ game }) => {
  const { t } = useTranslation(['common']);

  return (
    <S.BoxCard>
      <img src={game?.thumbnail} alt="" />
      <S.WrapperInfo>
        <S.TitleCard>{game?.title}</S.TitleCard>
        <S.TextCard>{t('release_date')}</S.TextCard>
        <S.SubtitleCard>{game?.release_date}</S.SubtitleCard>
        <S.TextCard>{t('platforms')}</S.TextCard>
        <S.SubtitleCard>{game?.platform}</S.SubtitleCard>
        <S.TextCard>{t('website')}</S.TextCard>
        <a href={game?.game_url} target="_blank" rel="noopener noreferrer">
          {game?.game_url.slice(0, 23) + '...'}
        </a>
        <S.TextCard>{t('genre')}</S.TextCard>
        <S.SubtitleCard>{game?.genre}</S.SubtitleCard>
      </S.WrapperInfo>
    </S.BoxCard>
  );
};
