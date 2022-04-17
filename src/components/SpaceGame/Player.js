import img from '../../assets/images/plaine.png';
import bang from '../../assets/bang.ogg';

export class Player {
  dead = false;
  health = 100;
  ammo = 100;
  score = 0;
  speed = 25;
  firebullets = [];
  lastFireAt = Date.now();

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  deductHealth = () => {
    this.health -= 10;
  };

  increaseScore = (score = 10) => {
    this.score += score;
  };

  update = (firecb, bullets) => {
    if (!this.dead) {
      bullets.forEach((bullet) => {
        if (
          Math.abs(bullet.xPos - this.posX - 25) < 35 &&
          Math.abs(bullet.yPos - this.posY) < 20
        ) {
          const audio = new Audio();
          audio.src = bang;
          audio.play();
          bullet.dead = true;
          this.health -= 10;
        }
      });
    }
    document.onkeydown = (e) => {
      if (e.keyCode === 39 && this.posX < 450) {
        this.posX += this.speed;
      }
      if (e.keyCode === 37 && this.posX > 12) {
        this.posX -= this.speed;
      }
      document.addEventListener('keypress', (e) => {
        if (e.keyCode === 32) {
          if (Date.now() - this.lastFireAt > 250) {
            firecb(this.posX + 32, this.posY);
            this.lastFireAt = Date.now();
          }
        }
      });
    };
    if (this.health <= 0) {
      this.dead = true;
      gameOver(this.score);
    }
  };

  draw = (ctx) => {
    const image = new Image();
    image.src = img;
    ctx.drawImage(image, this.posX, this.posY, 65, 90);

    ctx.font = '16px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Health: ${this.health}`, 525 - 95, 475 - 15);

    ctx.font = '16px Arial';
    ctx.fillStyle = 'lightgreen';
    ctx.fillText(`Score: ${this.score}`, 15, 25);
  };
}

export function gameOver(score) {
  let canvas = document.getElementById('rightBox');

  if (canvas) {
    canvas.innerHTML = `
      <center>
        <br/>
        <h2 class="text">Game Over!</h2>
        <p class="text">Your Score: ${score}</p>
        <br/>
        <button onClick="location.reload()" class="button-82-pushable" role="button">
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text">
            Again
          </span>
        </button>
      </center>
    `;
  }
}

export default Player;
