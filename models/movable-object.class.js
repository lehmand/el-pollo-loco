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
		console.log('Moving right!');
	}

	moveLeft() {
		setInterval(() => {
			this.x = this.x - this.speed;
		}, 1000 / 60);
	}
}
