class Car {

    //constructor of the class Car has 4 params
    //params are x,y,width,height
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        //constructs a controll
        this.controls = new Controls()
    }

    //mdraw is called in the main js to draw this car
    //car is only a rectangle
    //the 
    draw(ctx) {
        ctx.beginPath()
        ctx.rect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        )
        ctx.fill()
    }
}