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

      //Set up camera
      const cameraFocus = this.map.gameObjects.player;

      //Update objects
      Object.values(this.map.gameObjects).forEach(object => {
        object.update({
          arrow: this.directionInput.direction,
          map: this.map
        })
      })

      //Draw Map
      this.map.drawMap(this.context, cameraFocus);

      //Draw game objects
      Object.values(this.map.gameObjects).sort((a, b) => {
        return a.y - b.y;
      }).forEach(object => {
        object.sprite.draw(this.context, cameraFocus);
      })

      //Step through
      requestAnimationFrame(() => {
        step();
      })
    }
    step();
  }

  bindActionInput() {
    new KeyPressLister(["Enter", "a"], () => {
      this.map.checkForActionCutscene();
    })
  }

  bindPlayerPositionCheck() {
    document.addEventListener("PersonWalkingComplete", e => {
      if (e.detail.whoId === "player") {
        this.map.checkForFootstepCutscene()
      }
    })
  }

  startMap(mapConfig) {
    this.map = new OverworldMap(mapConfig);
    this.map.overworld = this;
    this.map.mountObjects();
  }

  init() {
    this.startMap(window.OverworldMaps.Brock);
    this.bindActionInput();
    this.bindPlayerPositionCheck();
    this.directionInput = new DirectionInput();
    this.directionInput.init();
    this.startGameLoop();
    this.cameraFocus =
    this.map.startCutscene([
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "down"},
      {who: "tech", type: "walk", direction: "left"},
      {who: "tech", type: "walk", direction: "left"},
      {who: "tech", type: "walk", direction: "left"},
      {who: "tech", type: "walk", direction: "down"},
      {type: "textMessage", text: "This is Brock"},
      {type: "textMessage", text: "He uses rock type pokemon"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "right"},
      {who: "tech", type: "walk", direction: "right"},
      {who: "tech", type: "walk", direction: "right"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "walk", direction: "up"},
      {who: "tech", type: "stand", direction: "down", time: 100},
    ]);
  }
}