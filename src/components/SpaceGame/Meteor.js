import img from '../../assets/images/meteor.png';
import bang from '../../assets/bang.ogg';

export class Meteor {
  speed = 4;
  dead = false;

  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  }

  isDead = () => {
    if (this.yPos > 475) {
      return true;
    }
  };

  update = (player, bullets) => {
    if (this.dead) return;
    this.yPos += this.speed;
    if (!this.dead && this.isDead()) {
      this.dead = true;
    }

    if (!this.dead) {
      bullets.forEach((bullet) => {
        if (
          Math.abs(bullet.xPos - this.xPos) < 55 &&
          Math.abs(bullet.yPos - this.yPos) < 70
        ) {
          const audio = new Audio();
          audio.src = bang;
          audio.play();
          player.increaseScore();
          this.dead = true;
          bullet.dead = true;
        }
      });

      if (!this.dead) {
        if (
          Math.abs(player.posX - this.xPos) < 75 &&
          Math.abs(player.posY - this.yPos) < 35
        ) {
          this.dead = true;
          player.deductHealth();
        }
      }
    }
  };

  draw = (ctx) => {
    const image = new Image();
    image.src = img;
    ctx.drawImage(image, this.xPos - 25, this.yPos, 55, 70);
  };
}

export default Meteor;
