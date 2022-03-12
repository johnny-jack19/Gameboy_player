class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.mapImage = new Image();
        this.mapImage.src = config.mapSrc;
    }

    drawMap(context) {
        context.drawImage(this.mapImage,
                            432, 550,
                            128, 128,
                            0, 0,
                            128, 128)
    }
}

window.OverworldMaps = {
    Brock: {
        mapSrc: "/images/elite_four.png",
        gameObjects: {
            player: new Person({
                x: 56,
                y: 112
            }),
            brock: new GameObject({
                imageInfo: {
                    sy: 408
                }
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