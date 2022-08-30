class Oak extends Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){
        super(canvas)
        this.drawFrame();
        this.showDisabled();
    }

    //This drawFrame method is used setInterval function for blinking the flame of cloud
    drawFrame(){
        drawColoredBackground(this.ctx,"rgb(0,0,100)");
        this.drawTree([CANVAS_SIZE/2,CANVAS_SIZE*0.9],200,0,10);
    }

    drawTree(location,len,angle,branchWidth){
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.strokeStyle="white";
        this.ctx.lineWidth=branchWidth;
        this.ctx.translate(...location);
        this.ctx.rotate(angle);
        this.ctx.moveTo(0,0);
        this.ctx.lineTo(0,-len);
        this.ctx.stroke();

        if(len < 10){
            this.ctx.restore();
            return;
        }

        this.drawTree([0,-len],len*0.75,angle+0.1,branchWidth*0.7);
        this.drawTree([0,-len],len*0.75,angle-0.1,branchWidth*0.7);
        this.ctx.restore();
    }
}



