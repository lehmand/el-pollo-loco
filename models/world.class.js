class World {
  character = new Character();

  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  healthbar = new HealthBar(50, 0);
  coinbar = new Coinbar(50, 50);
  salsabar = new Salsabar(50, 100);
  endbossbar = new Endbossbar(500, 10);

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  setWorld() {
    this.character.world = this;
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.hit();
          this.healthbar.setPercentage(this.character.energy);
        }
      });

      this.level.coins.forEach((coin, index) => {
        if (this.character.isColliding(coin)) {
          this.character.collectedCoins.push(coin);
          this.coinbar.setPercentage(this.character.collectedCoins.length * 20);
          if (this.character.collectedCoins.length > 5) {
            this.coinbar.setPercentage(100);
          }
          this.level.coins.splice(index, 1);
        }
      });

      this.level.bottles.forEach((bottle, index) => {
        if (this.character.isColliding(bottle)) {
          this.character.collectedBottles.push(bottle);
          this.salsabar.setPercentage(
            this.character.collectedBottles.length * 10
          );
          if (this.character.collectedBottles.length > 10) {
            this.salsabar.setPercentage(100);
          }
          this.level.bottles.splice(index, 1);
        }
      });
    }, 250);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.level.enemies);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.healthbar);
    this.ctx.translate(this.camera_x, 0);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.coinbar);
    this.ctx.translate(this.camera_x, 0);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.salsabar);
    this.ctx.translate(this.camera_x, 0);

    if (this.character.x > 2400) {
      this.ctx.translate(-this.camera_x, 0);

      this.addToMap(this.endbossbar);
      this.ctx.translate(this.camera_x, 0);
    }

    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(movableObject) {
    if (movableObject.otherDirection) {
      this.flipImage(movableObject);
    }

    movableObject.draw(this.ctx);
    movableObject.drawFrame(this.ctx);

    if (movableObject.otherDirection) {
      this.flipImageBack(movableObject);
    }
  }

  flipImage(movableObject) {
    this.ctx.save();
    this.ctx.translate(movableObject.width, 0);
    this.ctx.scale(-1, 1);
    movableObject.x = movableObject.x * -1;
  }

  flipImageBack(movableObject) {
    movableObject.x = movableObject.x * -1;
    this.ctx.restore();
  }
}
