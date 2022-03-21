class GameObject {
    constructor(config) {
        this.id = null;
        this.isMounted = false;
        this.x = config.x;
        this.y = config.y;
        this.isPlayerControlled = config.isPlayerControlled || false;
        this.imageInfo = config.imageInfo || {};
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src
        });

        this.behaviorLoop = config.behaviorLoop || [];
        this.behaviorLoopIndex = 0;
    }

    mount(map) {
        this.isMounted = true;
        map.addWall(this.x, this.y);
        
        //Wait for behaviors to load
        setTimeout(() => {
            this.doBehaviorEvent(map)
        }, 10)
    }

    async doBehaviorEvent(map) {
        if (map.isCutscenePlaying || this.behaviorLoop.length === 0) {
          return;
        }
    
        //Setting up our event with relevant info
        let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
        eventConfig.who = this.id;
    
        //Create an event
        const eventHandler = new OverworldEvent({ map, event: eventConfig });
        await eventHandler.init(); 
    
        //Setting the next event to fire
        this.behaviorLoopIndex += 1;
        if (this.behaviorLoopIndex === this.behaviorLoop.length) {
          this.behaviorLoopIndex = 0;
        } 
    
        //Do it again!
        this.doBehaviorEvent(map);
    }
}