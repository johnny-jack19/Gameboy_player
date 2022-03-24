class KeyPressLister {
    constructor(keyCode, callback) {
        let keySafe = true;
        this.keydownFunction = (event) => {
            if (keyCode.includes(event.code)) {
                if (keySafe) {
                    keySafe = false;
                    callback();
                }
            }
        };

        this.keyupFunction = (event) => {
            if (keyCode.includes(event.code)) {
                keySafe = true;
            }
        };

        this.mousedownFunction = (event) => {
            if (keyCode.includes(event.path[0].id)) {
                if (keySafe) {
                    keySafe = false;
                    callback();
                }
            }
        };
        
        this.mouseupFunction = (event) => {
            if (keyCode.includes(event.path[0].id)) {
                keySafe = true;
            }
        };


        document.addEventListener("keydown", this.keydownFunction);
        document.addEventListener("keyup", this.keyupFunction);
        document.addEventListener("mousedown", this.mousedownFunction);
        document.addEventListener("mouseup", this.mouseupFunction);
    }

    unbind() {
        document.removeEventListener("keydown", this.keydownFunction);
        document.removeEventListener("keyup", this.keyupFunction);
        document.removeEventListener("mousedown", this.mousedownFunction);
        document.removeEventListener("mouseup", this.mouseupFunction);
    }
}