class Cloud extends MovableObject {

    y = 15;
    width = 720;

    constructor(){
        super().loadImg('../assets/img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500;
    }
}