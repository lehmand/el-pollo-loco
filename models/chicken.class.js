class Chicken extends MovableObject {
    offsetY = 10;
    y = 460 - this.height;
    height = 120;
    IMAGES_WALKING = [
        '../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    
    constructor(){
        super().loadImg('../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 350 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate(){
        setInterval(() => {
			this.moveLeft();
            this.otherDirection = false;
		}, 1000 / 60);

        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 240)
    }
     
}