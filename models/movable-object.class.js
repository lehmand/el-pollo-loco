class MovableObject {
    x = 120;
    y = 290;
    img;
    width = 100;
    height = 150;
    imageCache = {};
    currentImage = 0;

    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight(){
        console.log('Moving right!')
    }

    moveLeft(){
        console.log('Moving left!')
    }
}