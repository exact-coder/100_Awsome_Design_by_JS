class Project{
    // This is our super constructor.We call our every method in this constructor
    constructor(canvas){
        this.canvas=canvas;
        this.ctx = canvas.getContext("2d");

        this.addEventListeners();
    }

    showDisabled(){
        this.ctx.fillStyle = "rgba(150,150,150,0.5)";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.font = "10vh Comic Sans MS";
        this.ctx.fillStyle="orange";
        this.ctx.textAlign="center";
        this.ctx.textBaseline="middle";
        this.ctx.fillText(this.constructor.name,this.canvas.width/2, this.canvas.height/2);
    }

    addEventListeners(){
        let me =this;
        this.canvas.addEventListener('mouseover', function(event){
            if(me.interval == null){
                me.drawFrame();
                me.interval = setInterval(()=>{
                    me.drawFrame();
                },1000/30);
            }
        },false);

        this.canvas.addEventListener('mouseout', function(event){
            clearInterval(me.interval);
            me.interval =null;

            me.showDisabled();
        },false);
    }

    

}

// This Utlitis function is used for creating a dark background for the whole canvas
function drawDarkBackground(ctx){
    ctx.beginPath();
    ctx.lineWidth=5;
    ctx.fillStyle="black";
    ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
}

//length is 1.40min 