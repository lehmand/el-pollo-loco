class Endbossbar extends Statusbar {

    IMAGES = [
        '../assets/img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/green/green60.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/green/green80.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/green/green100.png',
    ]

    constructor(x, y){
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = x;
        this.y = y;
    }
}