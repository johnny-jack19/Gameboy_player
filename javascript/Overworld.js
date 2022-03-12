class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-screen");
        this.context = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        const step = () => {
            //Clear off canvas
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            //Draw lower layer
            this.map.drawMap(this.context);
            
            //Draw game objects
            Object.values(this.map.gameObjects).forEach(object => {
              object.update({
                arrow: this.directionInput.direction
              });
              
              object.sprite.draw(this.context);
            })
            
            requestAnimationFrame(() => {
              step();
            })
          }
          step();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.Brock);

        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.directionInput.direction;

        this.startGameLoop();
    }
}