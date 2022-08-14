class Constelations{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){
        this.canvas=canvas;
        this.ctx = canvas.getContext("2d");

        this.drawDarkBackground();
        this.stars = this.getRandomStars(150);
        this.stars.push(new Star([100,500],true));
        this.stars.push(new Star([200,510],true));
        this.stars.push(new Star([300,550],true));
        this.stars.push(new Star([400,600],true));
        this.stars.push(new Star([420,680],true));
        this.stars.push(new Star([510,690],true));
        this.stars.push(new Star([550,600],true));


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
        for(let i=this.stars.length-6;i<this.stars.length; i++){
            const prevStar= this.stars[i-1];
            const star= this.stars[i];
            this.ctx.beginPath();
            this.ctx.strokeStyle='blue';
            this.ctx.moveTo(...prevStar.location);
            this.ctx.lineTo(...star.location);
            this.ctx.stroke();
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


    // This method is used for creating a dark background for the whole canvas
    drawDarkBackground(){
        this.ctx.beginPath();
        this.ctx.lineWidth=5;
        this.ctx.fillStyle="black";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
    }
}

// lenght is 1.3min
