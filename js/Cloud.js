class Cloud extends Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){

        super(canvas)
        this.cloudParts = this.generateCloudParts(100);
        this.drawFrame();
        this.showDisabled();
    }

    generateCloudParts(N){
        let arr=[];
        for(let i =0; i<N;i++){
            let x=CANVAS_SIZE*0.25+Math.random()*CANVAS_SIZE*0.5;
            let y= CANVAS_SIZE/2 -Math.random()*Math.sin(Math.PI*4* (x-CANVAS_SIZE*0.25)/CANVAS_SIZE*0.5)*CANVAS_SIZE*0.2;
            arr.push(new CloudPart([x,y]));
        };
        return arr;
    }

    //This drawFrame method is used setInterval function for blinking the flame of cloud
    drawFrame(){
        drawDarkBackground(this.ctx);
        drawColoredBackground(this.ctx,"rgb(10,100,255)");

        // this.ctx.globalCompositeOperation="lighter";
        for(let i=0; i<this.cloudParts.length;i++){
            this.cloudParts[i].draw(this.ctx);
        }
        // this.ctx.globalCompositeOperation="source-over";
    }

}

class CloudPart{
    constructor(location){
        this.location = location;
        this.radius = 50;
    }

    // This method is used for styling and creating a single star
    draw(ctx){
        ctx.beginPath();
        var grd = ctx.createRadialGradient(
            this.location[0],
            this.location[1],
            0,
            this.location[0],
            this.location[1],
            this.radius);
        grd.addColorStop(0,`rgba(255,255,255,0.5)`);
        grd.addColorStop(1,`rgba(255,255,255,0)`);
        // ctx.fillStyle=`rgba(255,${this.green},0,${(1-this.step/this.lifespan)*0.5})`;
        ctx.fillStyle=grd;
        ctx.arc(this.location[0],this.location[1],this.radius,0,Math.PI*2);
        ctx.fill(); 
    }

    update(){
    }
}

// length is 3.12min