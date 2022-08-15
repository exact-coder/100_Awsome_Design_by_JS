class Constelations extends Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){
        super(canvas)
        this.stars = this.getRandomStars(200);
        this.stars.push(new Star([100,500],true));
        this.stars.push(new Star([200,510],true));
        this.stars.push(new Star([300,550],true));
        this.stars.push(new Star([400,600],true));
        this.stars.push(new Star([420,680],true));
        this.stars.push(new Star([510,690],true));
        this.stars.push(new Star([550,600],true));

        this.drawFrame();
        this.showDisabled();

    }

    //This drawFrame method is used setInterval function for blinking all the stars 
    drawFrame(){
        drawDarkBackground(this.ctx);
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


}


