class MovableObject {
    x = 50;
    y = 100;
    img;
    width = 100;
    height = 300;

    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){
        console.log('Moving right!')
    }

    moveLeft(){

    }
}