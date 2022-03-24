class OverworldMap {
    constructor(config) {
        this.overworld = null;
        this.gameObjects = config.gameObjects;
        this.mapImage = new Image();
        this.isCutscenePlaying = false;
        this.mapImage.src = config.mapSrc;
        this.cutsceneSpaces = config.cutsceneSpaces || {};
        this.walls = config.walls || {
            "0, 32": true, "0, 48": true, "0, 64": true,
            "0, 80": true, "0, 96": true,
            "16, 0": true, "16, 104": true, "16, 112": true,
            "32, 0": true, "32, 16": true, "32, 88": true,
            "32, 96": true, "32, 112": true, 
            "48, 120": true,
            "64, 120": true,
            "80, 0": true, "80, 16": true, "80, 96": true,
            "80, 112": true,
            "96, 0": true, "96, 112": true,
            "112, 0": true, "112, 16": true, "112, 32": true,
            "112, 48": true, "112, 64": true, "112, 80": true,
            "112, 96": true, "112, 112": true
        };
    }

    drawMap(context, cameraFocus) {
        context.drawImage(this.mapImage, 432, 550, 128, 128, 56 - cameraFocus.x, 56 - cameraFocus.y, 128, 128);
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

    checkForActionCutscene() {
        const player = this.gameObjects["player"];
        const nextCoords = utils.nextPosition(player.x, player.y, player.direction);
        const match = Object.values(this.gameObjects).find(object => {
            return `${object.x}, ${object.y}` === `${nextCoords.x}, ${nextCoords.y}`;
        })
        if (!this.isCutscenePlaying && match && match.talking.length > 0) {
            this.startCutscene(match.talking[0].events);
        }
    }

    checkForFootstepCutscene() {
        const player = this.gameObjects["player"];
        const match = this.cutsceneSpaces[`${player.x}, ${player.y}`];
        if (!this.isCutscenePlaying && match) {
            this.startCutscene(match[0].events);
        }
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
                this.addWall(48, 0);
                this.gameObjects.wallOne = new GameObject({x: 48, y: 0});
                this.gameObjects.wallTwo = new GameObject({x: 64, y: 0});
            }
        });
    }
    removeDoor(){
        document.addEventListener("keydown", e => {
            if (e.code == "KeyR" && this.walls["64, 0"] === true) {
                console.log("Remove door");
                this.removeWall(64, 0);
                this.removeWall(48, 0);
                delete this.gameObjects.wallOne;
                delete this.gameObjects.wallTwo;
            }
        });
    }
}


window.OverworldMaps = {
    Brock: {
        mapSrc: "/images/elite_four.png",
        door: true,
        cutsceneSpaces: {
            "48, 0": [
                {
                    events: [
                        {who: "tech", type: "walk", direction: "down"},
                        {who: "tech", type: "walk", direction: "left"},
                        {who: "tech", type: "walk", direction: "left"},
                        {who: "tech", type: "walk", direction: "left"},
                        {who: "tech", type: "stand", direction: "up", time: 100},
                        {type: "textMessage", text: "Where do you think you're going?"},
                        {who: "player", type: "walk", direction: "down"},
                        {type: "textMessage", text: "Stay out!"},
                        {who: "tech", type: "walk", direction: "right"},
                        {who: "tech", type: "walk", direction: "right"},
                        {who: "tech", type: "walk", direction: "right"},
                        {who: "tech", type: "walk", direction: "up"},
                        {who: "tech", type: "stand", direction: "down"},
                    ]
                }
            ],
            "64, 0": [
                {
                    events: [
                        {who: "tech", type: "walk", direction: "down"},
                        {who: "tech", type: "walk", direction: "left"},
                        {who: "tech", type: "walk", direction: "left"},
                        {who: "tech", type: "stand", direction: "up", time: 100},
                        {type: "textMessage", text: "Where do you think you're going?"},
                        {who: "player", type: "walk", direction: "down"},
                        {type: "textMessage", text: "Stay out!"},
                        {who: "tech", type: "walk", direction: "right"},
                        {who: "tech", type: "walk", direction: "right"},
                        {who: "tech", type: "walk", direction: "up"},
                        {who: "tech", type: "stand", direction: "down"},
                    ]
                }
            ],
            "16, 96": [
                {
                    events: [
                        {type: "changeMap", map: "Misty"}
                    ]
                }
            ]
        },
        gameObjects: {
            brock: new Person({
                imageInfo: {sy: 408},
                x: 64,
                y: 48,
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "Want me to heal your pokemon?"},
                        ]
                    }
                ]
            }),
            tech: new Person({
                imageInfo: {sy: 187},
                x: 96,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "This is Brock", facePlayer: "tech"},
                            {type: "textMessage", text: "He uses rock type pokemon"},
                        ]
                    }
                ]
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 48,
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
                x: 64,
                y: 48
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "Want me to heal your pokemon?"},
                        ]
                    }
                ]
            }),
            tech: new Person({
                imageInfo: {sy: 187},
                x: 96,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "This is Misty", facePlayer: "tech"},
                            {type: "textMessage", text: "She uses water type pokemon"},
                        ]
                    }
                ]
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 48,
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
                x: 64,
                y: 48
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "Want me to heal your pokemon?"},
                        ]
                    }
                ]
            }),
            tech: new Person({
                imageInfo: {sy: 187},
                x: 96,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "This is Lt. Surge", facePlayer: "tech"},
                            {type: "textMessage", text: "He uses electric type pokemon"},
                        ]
                    }
                ]
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 48,
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
                x: 64,
                y: 48
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "Want me to heal your pokemon?"},
                        ]
                    }
                ]
            }),
            tech: new Person({
                imageInfo: {sy: 187},
                x: 96,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "This is Erika", facePlayer: "tech"},
                            {type: "textMessage", text: "She uses Grass type pokemon"},
                        ]
                    }
                ]
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 48,
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
                x: 64,
                y: 48
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "Want me to heal your pokemon?"},
                        ]
                    }
                ]
            }),
            tech: new Person({
                imageInfo: {sy: 187},
                x: 96,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "This is Koga", facePlayer: "tech"},
                            {type: "textMessage", text: "He uses poison type pokemon"},
                        ]
                    }
                ]
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 48,
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
                x: 64,
                y: 48
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "Want me to heal your pokemon?"},
                        ]
                    }
                ]
            }),
            tech: new Person({
                imageInfo: {sy: 187},
                x: 96,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "This is Sabrina", facePlayer: "tech"},
                            {type: "textMessage", text: "She uses psychic type pokemon"},
                        ]
                    }
                ]
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 48,
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
                x: 64,
                y: 48
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "Want me to heal your pokemon?"},
                        ]
                    }
                ]
            }),
            tech: new Person({
                imageInfo: {sy: 187},
                x: 96,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "This is Blaine", facePlayer: "tech"},
                            {type: "textMessage", text: "He uses fire type pokemon"},
                        ]
                    }
                ]
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 48,
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
                x: 64,
                y: 48
            }),
            joy: new Person({
                imageInfo: {sy: 255},
                x: 16,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "Want me to heal your pokemon?"},
                        ]
                    }
                ]
            }),
            tech: new Person({
                imageInfo: {sy: 187},
                x: 96,
                y: 16,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "This is Giovanni", facePlayer: "tech"},
                            {type: "textMessage", text: "He uses ground type pokemon"},
                        ]
                    }
                ]
            }),
            player: new Person({
                isPlayerControlled: true,
                x: 48,
                y: 112,
                direction: "up"
            })
        }
    },
}