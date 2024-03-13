class MovableObject {
    x = 120;
    y = 290;
    img;
    width = 100;
    height = 150;

    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){
        console.log('Moving right!')
    }

    moveLeft(){
        console.log('Moving left!')
    }
}