class Chicken extends MovableObject {

    y = 460 - this.height;
    height = 120;
    
    constructor(){
        super().loadImg('../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 350 + Math.random() * 500;
    }
}