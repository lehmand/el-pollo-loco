class MovableObject {
  x = 120;
  y = 290;
  img;
  width = 100;
  height = 150;
  imageCache = {};
  currentImage = 0;
  speed = 0.3;
  otherDirection = false;
  speedY = 0;
  acceleration = 1.95;

  applyGravity() {
    setInterval(() => {
      if (this.isInAir() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isInAir() {
    return this.y < 52;
  }

  draw(ctx){
	ctx.drawImage(
		this.img,
		this.x,
		this.y,
		this.width,
		this.height
	  );
  }

  drawFrame(ctx){
	if(this instanceof Character || this instanceof Chicken){
	ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "lime";
    ctx.rect(
		this.x,
		this.y,
		this.width,
		this.height
    );
    ctx.stroke();
	}
  }

  loadImg(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }

  jump() {
    this.speedY = 25;
  }
}
