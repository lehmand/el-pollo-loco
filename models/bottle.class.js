class Bottle extends CollectableObject {

    width = 150;
    height = 150;
    IMAGES = [
        '../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    constructor(y){
        super();

        this.loadImg(this.IMAGES[0]);
        this.loadImages(this.IMAGES);

        this.x = Math.round(Math.random() * 3000);
        this.y = y;

        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        },400)
    }
}