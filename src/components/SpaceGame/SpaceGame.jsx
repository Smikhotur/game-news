import React, { useEffect, useState } from 'react';
import { Meteor } from './Meteor';
import { Bullet } from './Bullet';
import { Player } from './Player';
import { Boss } from './Boss';
import { BulletBoss } from './BulletBoss';
import { S } from '../../pages/MyProfile/styles';
import startMus from '../../assets/start.mp3';
import alien from '../../assets/alien.mp3';
import laugh from '../../assets/laugh.mp3';
import { FinishGame } from './FinishGame/FinishGame';

export const SpaceGame = () => {
  const [play, setPlay] = useState(false);
  const [gameOver, setGameOver] = useState({});
  let stopPlay = true;
  const [playSound, setPlaySound] = useState(true);
  let start = true;
  let startBoss;
  let canvas;
  let stopGame;
  let ctx;
  let settimeout;
  let resultScore;
  let maxMeteorCount = 10;
  let lastMeteorSpawnAt = Date.now();
  const [audio] = useState(new Audio(startMus));
  const [bossSound] = useState(new Audio(alien));
  const [bossLaugh] = useState(new Audio(laugh));

  let player = new Player(525 / 2, 475 / 1.4);
  let boss = new Boss(250, 35);
  const randomNumber = (min, max) => Math.random() * max + min;
  const startSound = () => {
    playSound ? audio.play() : audio.pause();
    setPlaySound(!playSound);
    bossSound.pause();
  };

  useEffect(() => {
    let meteors = [];
    let bullets = [];
    let bulletsBoss = [];
    let fireBulletcb = (xpos, ypos) => bullets.push(new Bullet(xpos, ypos));
    let fireBulletcbBoss = (xpos, ypos) =>
      bulletsBoss.push(new BulletBoss(xpos, ypos));

    const removeGame = (score) => {
      if (score) resultScore = score;

      setPlay(false);
      audio.pause();
      audio.pause();
      bossSound.pause();
      bossLaugh.pause();
      clearInterval(stopGame);
      player = null;
      boss = null;
      stopPlay = null;

      return resultScore;
    };

    const gameOverFunction = (score) => {
      setGameOver({
        score: removeGame(score),
        result: 'over',
      });
    };

    const victoryFunction = (score) => {
      setGameOver({
        score: removeGame(score),
        result: 'win',
      });
    };

    if (play && stopPlay) {
      canvas = document.getElementById('myCanvas');
      stopGame = setInterval(() => {
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 525, 475);

        player?.update(
          fireBulletcb,
          bulletsBoss,
          gameOverFunction,
          settimeout,
          start
        );
        player?.draw(ctx);

        const random = randomNumber(0, 700);
        if (
          player?.score <= 300 ||
          (player?.score >= 500 && player?.score <= 1000)
        ) {
          if (!start) startBoss = true;
          bossSound.pause();
          audio.play();

          if (
            meteors.length < maxMeteorCount &&
            Date.now() - lastMeteorSpawnAt > 1500
          ) {
            meteors.push(new Meteor(random, -200));
            lastMeteorSpawnAt = Date.now();
          }
          meteors = meteors.filter((enemy) => {
            return !enemy.dead;
          });
          meteors.forEach((meteor) => {
            meteor.update(player, bullets);
            meteor.draw(ctx);
          });
        }
        if (
          (player?.score > 300 && player?.score < 500) ||
          player?.score > 1000
        ) {
          if (startBoss) {
            audio.pause();
            bossSound.play();
          }

          if (start) {
            audio.pause();
            bossLaugh.autoplay = true;
            bossLaugh.load();
            settimeout = setTimeout(() => {
              bossLaugh.pause();
              bossSound.play();
            }, 6000);
            start = false;
          }
          boss?.upDateDead();
          boss?.draw(ctx);
          boss?.update(fireBulletcbBoss, bullets, player, victoryFunction);
          bulletsBoss = bulletsBoss.filter((bullet) => {
            return !bullet.dead;
          });
          bulletsBoss.forEach((bullet) => {
            bullet.update();
            bullet.draw(ctx);
          });
        }

        bullets = bullets.filter((bullet) => {
          return !bullet.dead;
        });
        bullets.forEach((bullet) => {
          bullet.update();
          bullet.draw(ctx);
        });
      }, 1000 / 30);
    } else {
      ctx = null;
    }

    return () => {
      fireBulletcb = null;
      fireBulletcbBoss = null;
      audio.pause();
      audio.pause();
      bossSound.pause();
      bossLaugh.pause();
    };
  });

  useEffect(() => {
    return () => {
      audio.pause();
      audio.pause();
      bossSound.pause();
      bossLaugh.pause();
      clearInterval(stopGame);
      ctx = null;
      canvas = null;
      player = null;
      boss = null;
      location.reload();
    };
  }, []);

  console.log(gameOver);

  return (
    <>
      {play ? (
        <>
          <canvas id="myCanvas" width="525" height="475" />
          <S.StopBtn
            onClick={() => {
              startSound();
              clearInterval(stopGame);
              clearTimeout(settimeout);
              setPlay(false);
            }}
            type="button"
          >
            Stop
          </S.StopBtn>
        </>
      ) : (
        <div>
          {gameOver?.result && (
            <FinishGame
              gameOver={gameOver}
              stopGame={stopGame}
              setGameOver={setGameOver}
              bossSound={bossSound}
            />
          )}
          <button
            onClick={() => {
              startSound();
              setPlay(true);
            }}
            type="button"
          >
            Play
          </button>
        </div>
      )}
    </>
  );
};
