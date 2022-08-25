class SootingStars extends Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){

        super(canvas)
        this.stars = this.getRandomStars(200);
        this.shootingStars =[];
        this.drawFrame();
        this.showDisabled();
    }

    //This drawFrame method is used setInterval function for blinking all the stars 
    drawFrame(){
        if(Math.random()<0.03){
            this.shootingStars.push(new ShootingStar());
        }
        drawDarkBackground(this.ctx);
        for(let i=0; i<this.stars.length;i++){
            this.stars[i].update();
            this.stars[i].draw(this.ctx);
        }

        for(let i=0; i<this.shootingStars.length;i++){
            this.shootingStars[i].update();
            this.shootingStars[i].draw(this.ctx);
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

class ShootingStar{
    constructor(){
        this.location = ([
            CANVAS_SIZE *0.5+ Math.random()*CANVAS_SIZE*0.5,
            Math.random()*CANVAS_SIZE]);
        this.oldLocation = this.location;
        this.radius = 0;
        this.step =0;
        this.spreed = Math.random()*5+50;

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
        this.step +=0.1;
        if(this.step > Math.PI){
            this.radius=0;
        }else{
            this.radius=Math.sin(this.step)*5;
        }
        this.oldLocation = [
            this.location[0],
            this.location[1]
        ];
        this.location[0] -= this.spreed;
    }
}

