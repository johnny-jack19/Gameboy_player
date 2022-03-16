class Sprite {
    constructor(config) {

        //Set image
        this.image = new Image();
        this.image.src = config.src || "/images/overworld.png";
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Configure Animation
        this.animations = {
            "idle-down": [[26, 34]],
            "walk-down": [[9, 34], [26, 34], [43, 34], [26, 34]],
            "idle-right": [[145, 34]],
            "walk-right": [[162, 34], [145, 34]],
            "idle-up": [[77, 34]],
            "walk-up": [[60, 34], [77, 34], [94, 34], [77, 34]],
            "idle-left": [[111, 34]],
            "walk-left": [[128, 34], [111, 34]]
        }
        this.currentAnimation = config.currentAnimation || "walk-up";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 4;
        this.animationFrameProgress = this.animationFrameLimit;

        //Reference the game object
        this.gameObject = config.gameObject;
    }

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        //Downtick frame progress
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        //Reset the counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }

    draw(context) {
        this.updateAnimationProgress();
        let sx = this.gameObject.imageInfo.sx || 26;
        let sy = this.gameObject.imageInfo.sy || 34;
        if (this.gameObject.isPlayerControlled) {
            sx = this.frame[0];
            sy = this.frame[1];
            document.addEventListener("mousedown", e => {
                if (e.path[0].id == "select") {
                    console.log(this.gameObject.x, this.gameObject.y);
                }
            });
          
        }
        const x = this.gameObject.x || 56;
        const y = this.gameObject.y || 56;
        
        this.isLoaded && context.drawImage(this.image, sx, sy, 16, 16, x, y, 16, 16);
        
    }
}