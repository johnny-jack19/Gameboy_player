class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-screen");
    this.context = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    //Check for door
    this.map.createDoor();
    this.map.removeDoor();
    this.map.gameObjects.player.sprite.findPosition();

    const step = () => {
      //Clear off canvas
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //Update objects
      Object.values(this.map.gameObjects).forEach(object => {
        object.update({
          arrow: this.directionInput.direction,
          map: this.map
        })
      })

      //Draw lower layer
      this.map.drawMap(this.context);

      //Draw game objects
      Object.values(this.map.gameObjects).sort((a, b) => {
        return a.y - b.y;
      }).forEach(object => {
        object.sprite.draw(this.context);
      })

      //Step through
      requestAnimationFrame(() => {
        step();
      })
    }
    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.Brock);
    this.map.mountObjects();
    this.directionInput = new DirectionInput();
    this.directionInput.init();
    this.startGameLoop();
    this.map.startCutscene([
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "left"},
      {who: "tech", type: "walk", direction: "left"},
      {who: "tech", type: "walk", direction: "left"},
      {who: "tech", type: "walk", direction: "left"},
      {who: "tech", type: "walk", direction: "left"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {type: "textMessage", text: "This is Brock"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "right"},
      {who: "tech", type: "walk", direction: "right"},
      {who: "tech", type: "walk", direction: "right"},
      {who: "tech", type: "walk", direction: "right"},
      {who: "tech", type: "walk", direction: "right"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "stand", direction: "down", time: 1000},
    ]);
  }
}