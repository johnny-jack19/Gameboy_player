class Sprite {
    constructor(config) {

        //Set image
        this.image = new Image();
        this.image.src = config.src || "/images/overworld.png";
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Configure Animation
        this.animations = config.animation || {
            idleDown : [
                [0, 0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //Connect to gameObject
        this.gameObject = config.gameObject;
    }

    draw(context) {
        const sx = this.gameObject.imageInfo.sx || 26;
        const sy = this.gameObject.imageInfo.sy || 34;
        const sw = this.gameObject.imageInfo.sw || 16;
        const sh = this.gameObject.imageInfo.sh || 16;
        const x = this.gameObject.x || 56;
        const y = this.gameObject.y || 56;
        const dw = this.gameObject.imageInfo.dw || 16;
        const dh = this.gameObject.imageInfo.dh || 16;

        this.isLoaded && context.drawImage(this.image, sx, sy, sw, sh, x, y, dw, dh)
    }
}