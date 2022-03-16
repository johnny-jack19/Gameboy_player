class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.mapImage = new Image();
        this.mapImage.src = config.mapSrc;
        this.walls = config.walls || {};
    }

    drawMap(context) {
        context.drawImage(this.mapImage,
                            432, 550,
                            128, 128,
                            0, 0,
                            128, 128)
    }

    isSpaceTaken(currentX, currentY, direction) {
        let x = currentX;
        let y = currentY;
        if (direction === "left") {
            x -= 8;
        } else if (direction === "right") {
            x += 8;
        } else if (direction === "up") {
            y -= 8;
        } else if (direction === "down") {
            y += 8;
        }
        return this.walls[`${x}, ${y}`] || false;
    }
}

window.OverworldMaps = {
    Brock: {
        mapSrc: "/images/elite_four.png",
        walls: {
            "8, 8": true,
            "8, 16": true,
            "8, 24": true,
            "8, 32": true,
            "8, 40": true,
            "8, 48": true,
            "8, 56": true,
            "8, 64": true,
            "8, 72": true,
            "8, 80": true,
            "8, 88": true,
            "8, 96": true,
            "16, 0": true,
            "16, 104": true,
            "24, 8": true,
            "24, 16": true,
            "24, 88": true,
            "24, 96": true,
            "24, 104": true,
            "32, 8": true,
            "32, 16": true,
            "32, 88": true,
            "40, 0": true,
            "40, 8": true,
            "40, 16": true,
            "40, 88": true,
            "40, 96": true,
            "40, 104": true,
            "40, 112": true,
            "48, 56": true,
            "56, 48": true,
            "56, 56": true,
            "64, 56": true,
            "72, 0": true,
            "72, 8": true,
            "72, 16": true,
            "72, 88": true,
            "72, 96": true,
            "72, 104": true,
            "72, 112": true,
            "80, 16": true,
            "80, 88": true,
            "88, 8": true,
            "88, 16": true,
            "88, 88": true,
            "88, 96": true,
            "96, 0": true,
            "96, 104": true,
            "104, 8": true,
            "104, 16": true,
            "104, 24": true,
            "104, 32": true,
            "104, 48": true,
            "104, 56": true,
            "104, 64": true,
            "104, 40": true,
            "104, 72": true,
            "104, 80": true,
            "104, 88": true,
            "104, 96": true
        },
        gameObjects: {
            brock: new Person({
                imageInfo: {
                    sy: 408
                }
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
            player: new Person({
                x: 56,
                y: 112
            }),
            misty: new GameObject({
                imageInfo: {
                    sy: 306
                }
            })
        }
    },

    Surge: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            player: new Person({
                x: 56,
                y: 112
            }),
            surge: new GameObject({
                imageInfo: {
                    sy: 714
                }
            })
        }
    },

    Erika: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            player: new Person({
                x: 56,
                y: 112
            }),
            erika: new GameObject({
                imageInfo: {
                    sy: 782
                }
            })
        }
    },

    Koga: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            player: new Person({
                x: 56,
                y: 112
            }),
            koga: new GameObject({
                imageInfo: {
                    sy: 833
                }
            })
        }
    },

    Sabrina: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            player: new Person({
                x: 56,
                y: 112
            }),
            sabrina: new GameObject({
                imageInfo: {
                    sy: 153
                }
            })
        }
    },

    Blaine: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            player: new Person({
                x: 56,
                y: 112
            }),
            blaine: new GameObject({
                imageInfo: {
                    sy: 425
                }
            })
        }
    },

    Giovanni: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            player: new Person({
                x: 56,
                y: 112
            }),
            giovanni: new GameObject({
                imageInfo: {
                    sy: 799
                }
            })
        }
    }
}