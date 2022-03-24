const utils = {
    nextPosition(initialX, initialY, direction) {
        let x = initialX;
        let y = initialY;
        if (direction === "left") {
            x -= 16;
        } else if (direction === "right") {
            x += 16;
        } else if (direction === "up") {
            y -= 16;
        } else if (direction === "down") {
            y += 16;
        }
        return {x, y};
    },

    emitEvent(name, detail) {
        const event = new CustomEvent(name, {
            detail
        });
        document.dispatchEvent(event);
    },

    oppositeDirection(direction) {
        const oppDirection = {
            up: "down",
            down: "up",
            left: "right",
            right: "left"
        }
        return oppDirection[direction];
    }
}