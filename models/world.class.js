class World {

    character = new Character();
    enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
];
    canvas;
    ctx;
    clouds = [
        new Cloud(),
    ];

    backgroundObjects = [
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 0),
    ];

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.backgroundObjects);

        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });    
    }

    addObjectsToMap(objects){
        objects.forEach(object => {
            this.addToMap(object);
        })
    }

    addToMap(movableObject){
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height)
    }
}