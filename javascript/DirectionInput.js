class DirectionInput {
    constructor() {
        this.heldDirection = [];

        this.map = {
            "ArrowUp": "up",
            "up-arrow": "up",
            "ArrowDown": "down",
            "down-arrow": "down",
            "ArrowLeft": "left",
            "left-arrow": "left",
            "ArrowRight": "right",
            "right-arrow": "right"
        }
    }

    get direction() {
        return this.heldDirection[0];
    }

    init() {
        document.addEventListener("keydown", e => {
            const dir = this.map[e.code];
            if (dir && this.heldDirection.indexOf(dir) === -1) {
                this.heldDirection.unshift(dir);
            }
        });
        document.addEventListener("keyup", e => {
            const dir = this.map[e.code];
            const index = this.heldDirection.indexOf(dir);
            if (index > -1) {
                this.heldDirection.splice(index, 1);
            }
        });
        document.addEventListener("mousedown", e => {
            const dir = this.map[e.path[0].id];
            if (dir && this.heldDirection.indexOf(dir) === -1) {
                this.heldDirection.unshift(dir);
            }
        });
        document.addEventListener("mouseup", e => {
            const dir = this.map[e.path[0].id];
            const index = this.heldDirection.indexOf(dir);
            if (index > -1) {
                this.heldDirection.splice(index, 1);
            }
        });
        document.addEventListener("touchstart", e => {
            const dir = this.map[e.path[0].id];
            if (dir && this.heldDirection.indexOf(dir) === -1) {
                this.heldDirection.unshift(dir);
            }
        });
        document.addEventListener("touchcancel", e => {
            const dir = this.map[e.path[0].id];
            const index = this.heldDirection.indexOf(dir);
            if (index > -1) {
                this.heldDirection.splice(index, 1);
            }
        });
    }
}