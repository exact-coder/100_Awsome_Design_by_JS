class Fire extends Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){

        super(canvas)
        this.fire = [];
        this.drawFrame();
        this.showDisabled();
    }

    //This drawFrame method is used setInterval function for blinking all the stars 
    drawFrame(){
        
        this.fire.push(new Flame([0.5*CANVAS_SIZE, 0.5 * CANVAS_SIZE]));
        drawDarkBackground(this.ctx);

        this.ctx.globalCompositeOperation="lighter";
        for(let i=0; i<this.fire.length;i++){
            if(this.fire[i].step>=this.fire[i].lifespan){
                this.fire.splice(i,1);
                i--;
            }else{
            this.fire[i].update();
            this.fire[i].draw(this.ctx);
            }
        }
        this.ctx.globalCompositeOperation="source-over";
    }

}

class Flame{
    constructor(location){
        this.location = location;
        this.radius = 50;
        this.spreed = Math.random() *4+4;
        this.step=0;
        this.lifespan=20;
        this.green=Math.round(Math.random()*150);
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
        grd.addColorStop(0,`rgba(255,${this.green},0,1)`);
        grd.addColorStop(1,`rgba(255,${this.green},0,0)`);
        // ctx.fillStyle=`rgba(255,${this.green},0,${(1-this.step/this.lifespan)*0.5})`;
        ctx.fillStyle=grd;
        ctx.arc(this.location[0],this.location[1],this.radius,0,Math.PI*2);
        ctx.fill(); 
    }

    update(){
        this.step++;
        this.radius -= 1;
        this.location[1] -=this.spreed;
        this.location[0] += (Math.random()-0.5)*4;
        
    }
}

// length is 2.53min