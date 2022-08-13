class StarryNight{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){
        this.canvas=canvas;
        this.ctx = canvas.getContext("2d");

        this.drawDarkBackground();
        this.stars = this.getRandomStars(150);
        for(let i=0; i<this.stars.length;i++){
            this.stars[i].draw(this.ctx);
        }

        
        setInterval(()=>{
            this.drawFrame()
        },1000/30);
    }

    //This drawFrame method is used setInterval function for blinking all the stars 
    drawFrame(){
        this.drawDarkBackground();
        for(let i=0; i<this.stars.length;i++){
            this.stars[i].update();
            this.stars[i].draw(this.ctx);
    }
    }

    // This method is used for creating many star
    getRandomStars(N){
        let arr =[];
        for(let i = 0; i<N;i++){
            arr.push(
                new Star(
                    [Math.random()*CANVAS_SIZE,
                    Math.random()*CANVAS_SIZE]
                )
                );
        }
        return arr;
    }

    /* // This method is used for styling and creating a single star
    drawStar(location){
        this.ctx.beginPath();
        this.ctx.lineWidth=5;
        this.ctx.fillStyle="white";
        this.ctx.arc(location[0],location[1],4,0,Math.PI*2);
        this.ctx.fill(); 
    } */

    // This method is used for creating a dark background for the whole canvas
    drawDarkBackground(){
        this.ctx.beginPath();
        this.ctx.lineWidth=5;
        this.ctx.fillStyle="black";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
    }
}

class Star{
    constructor(location){
        this.location = location;
        this.radius = Math.random() *2 +2;
    }

    // This method is used for styling and creating a single star
    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth=5;
        ctx.fillStyle="white";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 50;
        ctx.shadowOffsetY = 50;
        ctx.arc(this.location[0],this.location[1],this.radius,0,Math.PI*2);
        ctx.fill(); 
    }

    update(){
        this.radius = Math.random()* 2 +2;
    }
}

// Your watching video length is 45min.