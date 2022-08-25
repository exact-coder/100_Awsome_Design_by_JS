class RetroTV extends Project{
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
            if(this.raindrops[i].location[1] < this.raindrops[i].oldLocation[1]){
                this.raindrops[i].draw(this.ctx);
            }
    }
    }

    // This method is used for creating many star
    generateRainDrops(N){
        let arr =[];
        for(let i = 0; i<N;i++){
            arr.push(
                new RetroLines(
                    [Math.random()*CANVAS_SIZE,
                    Math.random()*CANVAS_SIZE]
                )
                );
        }
        return arr;
    }

}

class RetroLines{
    constructor(location){
        this.location = location;
        this.oldLocation =location;
        this.radius = Math.random()+1;
        this.spreed = Math.random() *5 +10;
    }

    // This method is used for styling and creating a single star
    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth=this.radius;
        ctx.strokeStyle="white";
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
            this.location[1] = 0;
        }
        if(this.location[0] > CANVAS_SIZE){
            this.location[0] = 0;
        }
        if(this.location[0] < 0){
            this.location[0] = CANVAS_SIZE;
        }
    }
}

// length is 2.15min