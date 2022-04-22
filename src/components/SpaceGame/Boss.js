import img from '../../assets/images/boss.gif';
import bang from '../../assets/bang.ogg';

export class Boss {
  dead = false;
  health = 1000;
  speed = 5;
  firebullets = [];
  lastFireAt = Date.now();

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.position = 1;
    this.randomOne =
      Math.floor(Math.floor(Math.random() * (400 - 100 + 1) + 100) / 25) * 25;
    this.randomTwo =
      Math.floor(Math.floor(Math.random() * (400 - 100 + 1) + 100) / 25) * 25;
  }

  upDateDead = () => {
    this.dead = false;
  };

  update = (firecb, bullets, player, victoryFunction) => {
    if (!this.dead) {
      bullets.forEach((bullet) => {
        if (
          Math.abs(bullet.xPos - this.posX) < 65 &&
          Math.abs(bullet.yPos - this.posY) < 90
        ) {
          const audio = new Audio();
          audio.src = bang;
          audio.play();
          bullet.dead = true;
          this.health -= 25;
        }
      });
    }

    if (this.position === 1 && this.posX < 475 && !this.dead) {
      this.posX += this.speed;
      if (this.posX === 475) {
        this.position = 2;
        this.randomOne =
          Math.floor(Math.floor(Math.random() * (400 - 100 + 1) + 100) / 25) *
          25;
        this.randomTwo =
          Math.floor(Math.floor(Math.random() * (400 - 100 + 1) + 100) / 25) *
          25;
      }
    }

    if (this.position === 2 && this.posX > 0 && !this.dead) {
      this.posX -= this.speed;

      if (this.posX === 0) {
        this.position = 1;
        this.randomOne =
          Math.floor(Math.floor(Math.random() * (400 - 100 + 1) + 100) / 25) *
          25;
        this.randomTwo =
          Math.floor(Math.floor(Math.random() * (400 - 100 + 1) + 100) / 25) *
          25;
      }
    }

    if (this.posX === this.randomOne) {
      if (Date.now() - this.lastFireAt > 250) {
        firecb(this.posX + 32, this.posY);
        this.lastFireAt = Date.now();
      }
    }

    if (this.posX === this.randomTwo) {
      if (Date.now() - this.lastFireAt > 250) {
        firecb(this.posX + 32, this.posY);
        this.lastFireAt = Date.now();
      }
    }

    if (this.health === 500) {
      this.dead = true;
      this.health = 490;
      player.increaseScore(200);
    }

    if (this.health <= 0) {
      this.dead = true;
      victoryFunction(player.score);
    }
  };

  draw = (ctx) => {
    const image = new Image();
    image.src = img;
    ctx.drawImage(image, this.posX, this.posY, 65, 90);

    ctx.font = '17px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText(`Health: ${this.health}`, 525 - 105, 475 - 450);
  };
}
