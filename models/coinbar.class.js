class Coinbar extends Statusbar {

    IMAGES = [
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ]

    constructor(x, y){
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = x;
        this.y = y;
    }
}