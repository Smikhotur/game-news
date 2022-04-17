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

export const SpaceGame = () => {
  const [play, setPlay] = useState(false);
  const [playSound, setPlaySound] = useState(true);
  let start = true;
  let startBoss;
  let canvas;
  let stopGame;
  let ctx;
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

    if (play) {
      canvas = document.getElementById('myCanvas');
      stopGame = setInterval(() => {
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 525, 475);

        player.update(fireBulletcb, bulletsBoss, boss);
        player.draw(ctx);

        const random = randomNumber(0, 700);
        if (
          player.score <= 10 ||
          (player.score >= 100 && player.score <= 150)
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
        } else {
          if (startBoss) {
            audio.pause();
            bossSound.play();
          }

          if (start) {
            audio.pause();
            bossLaugh.play();
            setTimeout(() => {
              bossLaugh.pause();
              bossSound.play();
            }, 6000);
            start = false;
          }
          boss.upDateDead();
          boss.draw(ctx);
          boss.update(fireBulletcbBoss, bullets, player);
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

  return (
    <>
      {play ? (
        <>
          <canvas id="myCanvas" width="525" height="475" />
          <S.StopBtn
            onClick={() => {
              startSound();
              clearInterval(stopGame);
              setPlay(false);
            }}
            type="button"
          >
            Stop
          </S.StopBtn>
        </>
      ) : (
        <button
          onClick={() => {
            startSound();
            setPlay(true);
          }}
          type="button"
        >
          Play
        </button>
      )}
    </>
  );
};
