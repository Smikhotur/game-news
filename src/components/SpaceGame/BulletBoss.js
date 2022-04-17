import shot from '../../assets/lazer.mp3';

export class BulletBoss {
  dead = false;
  speed = 10;
  shot = 0;

  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  }

  update = () => {
    this.yPos += this.speed;

    if (this.yPos < 0 || this.yPos > 475) {
      this.dead = true;
    }
  };

  draw = (ctx) => {
    const audio = new Audio();
    audio.src = shot;
    if (this.shot === 0) {
      audio.play();
      this.shot++;
    }
    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#777';
    ctx.fill();
    ctx.lineWİdth = 5;
    ctx.stroke();
  };
}

export default BulletBoss;
