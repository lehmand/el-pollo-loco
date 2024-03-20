class Bottle extends CollectableObject {

    width = 150;
    height = 150;
    IMAGES = [
        '../assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ]

    constructor(y){
        super();

        let bottleToShow = Math.round(Math.random() * 2)

        this.loadImg(this.IMAGES[bottleToShow]);


        this.x = Math.round(Math.random() * 3000);
        this.y = y;
        
    }
}