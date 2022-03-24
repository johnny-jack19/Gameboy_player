class Sprite {
    constructor(config) {
        //Reference the game object
        this.gameObject = config.gameObject;

        //Set image
        this.image = new Image();
        this.image.src = config.src || "/images/overworld.png";
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Configure Animation
        this.animations = {
            "idle-down": [26],
            "walk-down": [9, 26, 43, 26],
            "idle-right": [145],
            "walk-right": [162, 145],
            "idle-up": [77],
            "walk-up": [60, 77, 94, 77],
            "idle-left": [111],
            "walk-left": [128, 111]
        }
        this.currentAnimation = config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;
        this.animationFrameLimit = this.gameObject.imageInfo.animationFrameLimit || 8;
        this.animationFrameProgress = this.animationFrameLimit;
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

    draw(context, cameraFocus) {
        this.updateAnimationProgress();
        const sx = this.frame || 26;
        const sy = this.gameObject.imageInfo.sy || 34;
        const x = this.gameObject.x + 56 - cameraFocus.x;
        const y = this.gameObject.y + 56 - cameraFocus.y;
        this.isLoaded && context.drawImage(this.image, sx, sy, 16, 16, x, y, 16, 16);
    }

    //For testing
    findPosition() {
        if (this.gameObject.isPlayerControlled) {
            document.addEventListener("keydown", e => {
                //console.log(e.code);
                if (e.code == "KeyF") {
                    console.log(this.gameObject.x, this.gameObject.y, this.currentAnimation);
                    return;
                }
            });
        }
    }
}