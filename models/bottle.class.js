class Bottle extends CollectableObject {

    width = 150;
    height = 150;
    IMAGES_ONGROUND = [
        '../assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    IMAGES_ROTATION = [
        '../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    constructor(y){
        super();
        
        let bottleToShow = Math.round(Math.random())

        this.loadImg(this.IMAGES_ONGROUND[bottleToShow]);
        this.x = Math.round(Math.random() * 3000);
        this.y = y;
    }
}