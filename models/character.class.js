class Character extends MovableObject {

    height = 380;
    width = 200;
    y = 440 - this.height;

    constructor(){
        super().loadImg('../assets/img/2_character_pepe/2_walk/W-21.png')
    }

    jump(){

    }
}