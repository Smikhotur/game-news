import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import space from '../../../assets/images/GameOver.png';
import win from '../../../assets/images/win.gif';
import gameOverMp3 from '../../../assets/GAME_OVER.mp3';
import winSound from '../../../assets/winSound.mp3';
import winVoice from '../../../assets/win.mp3';
import overVoice from '../../../assets/over.mp3';

import { S } from './styles';

export const FinishGame = ({ gameOver, stopGame, setGameOver }) => {
  const { t } = useTranslation(['common']);
  const [sound] = useState(
    new Audio(gameOver.result === 'win' ? winSound : gameOverMp3)
  );

  const [voice] = useState(
    new Audio(gameOver.result === 'win' ? winVoice : overVoice)
  );

  useEffect(() => {
    voice.play();
    sound.play();

    return () => {
      sound.pause();
      voice.pause();
    };
  }, []);

  const handleGame = () => {
    clearInterval(stopGame);
    setGameOver({});
  };

  return (
    <S.FinishGameInner image={gameOver.result === 'win' ? win : space}>
      <div>
        {t('score') + ':'}
        <span>{gameOver.score}</span>
        <button onClick={handleGame}>{t('home')}</button>
      </div>
    </S.FinishGameInner>
  );
};
