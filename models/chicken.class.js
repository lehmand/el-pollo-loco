class Chicken extends MovableObject {

    width = 100;
    height = 100

    constructor(){
        super().loadImg('../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500;
        this.y = 480 - this.width - 80;
    }
}