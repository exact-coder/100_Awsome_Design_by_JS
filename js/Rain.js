class Rain extends Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){

        super(canvas)
        this.raindrops = this.generateRainDrops(200);
        this.drawFrame();
        this.showDisabled();
    }

    //This drawFrame method is used setInterval function for blinking all the stars 
    drawFrame(){
        drawDarkBackground(this.ctx);
        for(let i=0; i<this.raindrops.length;i++){
            this.raindrops[i].update();
            this.raindrops[i].draw(this.ctx);
    }
    }

    // This method is used for creating many star
    generateRainDrops(N){
        let arr =[];
        for(let i = 0; i<N;i++){
            arr.push(
                new RainDrop(
                    [Math.random()*CANVAS_SIZE,
                    Math.random()*CANVAS_SIZE]
                )
                );
        }
        return arr;
    }

}

class RainDrop{
    constructor(location){
        this.location = location;
        this.oldLocation =location;
        this.radius = Math.random()+1;
        this.spreed = Math.random() *50 + 50;
    }

    // This method is used for styling and creating a single star
    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth=this.radius;
        ctx.strokeStyle="rgba(255,255,255,0.3)";
        ctx.moveTo(...this.oldLocation);
        ctx.lineTo(...this.location);
        ctx.stroke(); 
    }

    update(){
        this.oldLocation=[
            this.location[0],
            this.location[1]
        ];
        this.location[1] +=this.spreed;
        
        if(this.location[1] > CANVAS_SIZE){
            this.location[1] -= CANVAS_SIZE;
            this.oldLocation[1] -= CANVAS_SIZE;
        }
    }
}

// length is 2.15min