class Snowfall extends Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){

        super(canvas)
        this.snow = this.generateSnowParticles(100);
        this.drawFrame();
        this.showDisabled();
    }

    //This drawFrame method is used setInterval function for blinking all the stars 
    drawFrame(){
        drawDarkBackground(this.ctx);
        for(let i=0; i<this.snow.length;i++){
            this.snow[i].update();
            this.snow[i].draw(this.ctx);
    }
    }

    // This method is used for creating many star
    generateSnowParticles(N){
        let arr =[];
        for(let i = 0; i<N;i++){
            arr.push(
                new SnowFlake(
                    [Math.random()*CANVAS_SIZE,
                    Math.random()*CANVAS_SIZE]
                )
                );
        }
        return arr;
    }


    // This method is used for creating a dark background for the whole canvas
    drawDarkBackground(){
        this.ctx.beginPath();
        this.ctx.lineWidth=5;
        this.ctx.fillStyle="black";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
    }
}

class SnowFlake{
    constructor(location){
        this.location = location;
        this.radius = Math.random() *2 +2;
        this.spreed = Math.random() *5 +10;
    }

    // This method is used for styling and creating a single star
    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth=5;
        ctx.fillStyle="white";
        ctx.arc(this.location[0],this.location[1],this.radius,0,Math.PI*2);
        ctx.fill(); 
    }

    update(){
        this.location[1] +=this.spreed;
        this.location[0] += Math.random()* 5;
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
