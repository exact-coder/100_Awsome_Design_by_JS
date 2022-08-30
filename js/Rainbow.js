class Rainbow extends Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){
        super(canvas)
        this.step=0;
        this.shape=[];
        this.shape.push([-CANVAS_SIZE*0.1,CANVAS_SIZE*0.5]);
        this.shape.push([CANVAS_SIZE*0.5,CANVAS_SIZE*0.2]);
        this.shape.push([CANVAS_SIZE*1.1,CANVAS_SIZE*0.5]);
        this.drawFrame();
        this.showDisabled();
    }

    //This drawFrame method is used setInterval function for blinking the flame of cloud
    drawFrame(){
        drawColoredBackground(this.ctx,"rgb(0,0,100)");
        this.drawRainbow(this.shape);
    }

    getColor(index){
        switch (index) {
            case 1:"blue";break;
            case 2:"orange";break;
            case 4:"yellow";break;
            case 5:"green";break;
            case 6:"orange";break;
            case 7:"coral";break;
            default:"indigo"; break;
        }
    }

    drawRainbow(shape){
        for(let i=7; i >= 1;i--){
            const dif = CANVAS_SIZE*0.2*(i/7);
            this.ctx.beginPath();
            this.ctx.moveTo(shape[0][0],shape[0][1]-dif*0.5);
            this.ctx.strokeStyle=this.getColor(i);
            this.ctx.lineWidth=dif;
            this.ctx.quadraticCurveTo(
                shape[1][0],shape[1][1]-dif*0.5,
                shape[2][0],shape[2][1]-dif*0.5);
            this.ctx.stroke();
        }
    }
}



// length is 3.48min