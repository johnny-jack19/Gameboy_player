class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.mapImage = new Image();
        this.isCutscenePlaying = false;
        this.mapImage.src = config.mapSrc;
        this.walls = config.walls || {
            "8, 8": true, "8, 16": true, "8, 24": true,
            "8, 32": true, "8, 40": true, "8, 48": true,
            "8, 56": true, "8, 64": true, "8, 72": true,
            "8, 80": true, "8, 88": true, "8, 96": true,
            "16, 0": true, "16, 104": true,
            "24, 8": true, "24, 16": true, "24, 88": true,
            "24, 96": true, "24, 104": true,
            "32, 8": true, "32, 16": true, "32, 88": true,
            "40, 0": true, "40, 8": true, "40, 16": true,
            "40, 88": true, "40, 96": true, "40, 104": true,
            "40, 112": true,
            "48, 120": true,
            "56, 120": true,
            "64, 120": true,
            "72, 0": true, "72, 8": true, "72, 16": true,
            "72, 88": true, "72, 96": true, "72, 104": true,
            "72, 112": true,
            "80, 16": true, "80, 88": true,
            "88, 8": true, "88, 16": true, "88, 88": true,
            "88, 96": true,
            "96, 0": true, "96, 104": true,
            "104, 8": true, "104, 16": true, "104, 24": true,
            "104, 32": true, "104, 48": true, "104, 56": true,
            "104, 64": true, "104, 40": true, "104, 72": true,
            "104, 80": true, "104, 88": true, "104, 96": true
        };
    }

    drawMap(context) {
        context.drawImage(this.mapImage, 432, 550, 128, 128, 0, 0, 128, 128);
    }

    isSpaceTaken(currentX, currentY, direction) {
        const {x, y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x}, ${y}`] || false;
    }

    async startCutscene(events) {
        this.isCutscenePlaying = true;
        for (let i = 0; i < events.length; i++) {
            const eventHandler = new OverworldEvent({
                event: events[i],
                map: this
            })
            await eventHandler.init();
        }
        this.isCutscenePlaying = false;
    }

    mountObjects() {
        Object.keys(this.gameObjects).forEach(key => {
            let object = this.gameObjects[key];
            object.id = key;
            object.mount(this);
        })
    }

    async startCutscene(events) {
        this.isCutscenePlaying = true;
        for (let i = 0; i < events.length; i++) {
            const eventHandler = new OverworldEvent({
                event: events[i],
                map: this,
            })
            await eventHandler.init();
        }
        this.isCutscenePlaying = false;

        //Restart npc behavior loops
        Object.values(this.gameObjects).forEach(object => {
            object.doBehaviorEvent(this)
        })
    }

    addWall(x, y) {
        this.walls[`${x}, ${y}`] = true;
    }
    
    removeWall(x, y) {
        delete this.walls[`${x}, ${y}`];
    }

    moveWall(wasX, wasY, direction) {
        this.removeWall(wasX, wasY);
        const {x, y} = utils.nextPosition(wasX, wasY, direction);
        this.addWall(x, y);
    }

    createDoor(){
        document.addEventListener("keydown", e => {
            if (e.code == "KeyC" && this.walls["64, 0"] == undefined) {
                console.log("Make door");
                this.addWall(64, 0);
                this.addWall(56, 0);
                this.addWall(48, 0);
            }
        });
    }
    removeDoor(){
        document.addEventListener("keydown", e => {
            if (e.code == "KeyR" && this.walls["64, 0"] === true) {
                console.log("Remove door");
                this.removeWall(64, 0);
                this.removeWall(56, 0);
                this.removeWall(48, 0);
            }
        });
    }
}


window.OverworldMaps = {
    Brock: {
        mapSrc: "/images/elite_four.png",
        door: true,
        gameObjects: {
            brock: new Person({
                imageInfo: {sy: 408},
                x: 56,
                y: 56,
                behaviorLoop: [
                    {type: "walk", direction: "left"},
                    {type: "walk", direction: "up"},
                    {type: "walk", direction: "right"},
                    {type: "walk", direction: "down"}
                ]
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16
            }),
            tech: new Person({
                imageInfo: {sy: 306},
                x: 96,
                y: 16
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 56,
                y: 112,
                direction: "up"
            })
        }
    },
    
    Misty: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            misty: new Person({
                imageInfo: {sy: 306},
                x: 56,
                y: 56
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 56,
                y: 112,
                direction: "up"
            })
        }
    },

    Surge: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            surge: new Person({
                imageInfo: {sy: 714},
                x: 56,
                y: 56
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 56,
                y: 112,
                direction: "up"
            })
        }
    },

    Erika: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            erika: new Person({
                imageInfo: {sy: 782},
                x: 56,
                y: 56
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 56,
                y: 112,
                direction: "up"
            })
        }
    },

    Koga: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            koga: new Person({
                imageInfo: {sy: 833},
                x: 56,
                y: 56
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 56,
                y: 112,
                direction: "up"
            })
        }
    },

    Sabrina: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            sabrina: new Person({
                imageInfo: {sy: 153},
                x: 56,
                y: 56
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 56,
                y: 112,
                direction: "up"
            })
        }
    },

    Blaine: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            blaine: new Person({
                imageInfo: {sy: 425},
                x: 56,
                y: 56
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 56,
                y: 112,
                direction: "up"
            })
        }
    },

    Giovanni: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            giovanni: new Person({
                imageInfo: {sy: 799},
                x: 56,
                y: 56
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 56,
                y: 112,
                direction: "up"
            })
        }
    }
}