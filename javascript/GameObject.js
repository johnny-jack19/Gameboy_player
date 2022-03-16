class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.isPlayerControlled = config.isPlayerControlled || false;
        this.imageInfo = config.imageInfo || {};
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src
        });
    }

    update() {

        
    }
}