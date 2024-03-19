class Cloud extends MovableObject {

    y = 15;
    width = 720;
    height = 300;

    constructor(){
        super().loadImg('../assets/img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500;
        
        this.animate();
        
    }

    animate(){
        setInterval(() => {
			this.moveLeft();
            this.otherDirection = false;
		}, 1000 / 25);
    }

}

