const utils = {
    nextPosition(initialX, initialY, direction) {
        let x = initialX;
        let y = initialY;
        if (direction === "left") {
            x -= 8;
        } else if (direction === "right") {
            x += 8;
        } else if (direction === "up") {
            y -= 8;
        } else if (direction === "down") {
            y += 8;
        }
        return {x, y};
    },

    emitEvent(name, detail) {
        const event = new CustomEvent(name, {
            detail
        });
        document.dispatchEvent(event);
    }
}

window.addEventListener("contextmenu", e => e.defaultPrevented());