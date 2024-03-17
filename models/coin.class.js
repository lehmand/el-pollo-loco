class Coin extends CollectableObject {

    width = 150;
    height = 150;
    IMAGES = [
        '../assets/img/8_coin/coin_1.png',
        '../assets/img/8_coin/coin_2.png',
    ]

    constructor(y){
        super();
        this.loadImg(this.IMAGES[0]);
        this.loadImages(this.IMAGES);

        this.x = Math.round(Math.random() * 2000);
        this.y = y;

        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 300)
    }
}