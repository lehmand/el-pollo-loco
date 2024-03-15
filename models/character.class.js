class Character extends MovableObject {

    height = 380;
    width = 200;
    speed = 4;
    y = 440 - this.height;

    IMAGES_WALKING = [
        '../assets/img/2_character_pepe/2_walk/W-21.png',
        '../assets/img/2_character_pepe/2_walk/W-22.png',
        '../assets/img/2_character_pepe/2_walk/W-23.png',
        '../assets/img/2_character_pepe/2_walk/W-24.png',
        '../assets/img/2_character_pepe/2_walk/W-25.png',
        '../assets/img/2_character_pepe/2_walk/W-26.png',
    ];

    world;

    constructor(){
        super().loadImg('../assets/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate(){

        setInterval(() => {
            if(this.world.keyboard.RIGHT){
                this.x += this.speed;
            }

            if(this.world.keyboard.LEFT){
                this.x -= this.speed;
            }
        }, 1000 / 60)

        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 12)
    }

    jump(){

    }
}