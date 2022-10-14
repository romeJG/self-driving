class Controls {

    //constructor of the class Controls
    constructor() {
        this.forward = false
        this.left = false
        this.right = false
        this.reverse = false

        this.#addKeyboardListeners()
    }

    //thismethod will become private if it has a "#" infront
    //keyboard listeners. 
    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true
                    break
                case "ArrowRight":
                    this.right = true
                    break
            }
        }
    }
}