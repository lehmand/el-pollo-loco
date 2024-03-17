class World {
	character = new Character();
	enemies = level1.enemies;

	canvas;
	ctx;
	keyboard;
	camera_x = 0;

	clouds = level1.clouds;

	backgroundObjects = level1.backgroundObjects;

	constructor(canvas, keyboard) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.draw();
		this.setWorld();
	}

	setWorld() {
		this.character.world = this;
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.translate(this.camera_x, 0);

		this.addObjectsToMap(this.backgroundObjects);
		this.addObjectsToMap(this.clouds);
		this.addToMap(this.character);
		this.addObjectsToMap(this.enemies);

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
			this.ctx.save();
			this.ctx.translate(movableObject.width, 0);
			this.ctx.scale(-1, 1);
			movableObject.x = movableObject.x * -1;
		}
		this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);

		if (movableObject.otherDirection) {
			movableObject.x = movableObject.x * -1;
			this.ctx.restore();
		}
	}
}
