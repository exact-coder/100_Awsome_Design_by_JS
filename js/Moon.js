class Moon extends Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){
        super(canvas)
        this.drawFrame();
        this.showDisabled();
    }

    //This drawFrame method is used setInterval function for blinking the flame of cloud
    drawFrame(){
        drawColoredBackground(this.ctx,"rgb(0,0,100)");
        this.drawMoon([CANVAS_SIZE*0.5,CANVAS_SIZE*0.5]);
    }

    drawMoon(location){
        this.ctx.beginPath();
        this.ctx.fillStyle="yellow";
        this.ctx.arc(location[0],location[1],CANVAS_SIZE*0.2,0,Math.PI*2);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.fillStyle="rgb(0,0,100)";
        this.ctx.arc(location[0]-CANVAS_SIZE*0.1,location[1],CANVAS_SIZE*0.2,0,Math.PI*2);
        this.ctx.fill();
    }
}



// length is 3.12min