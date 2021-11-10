class Daymode{
    constructor(x,y,w,h){
        var options = {
            'isStatic':true
        }

        this.w = w;
        this.h = h;
        this.image = loadImage("Daymode.png");
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
    }
    display(){

        push ()
        translate (this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        imageMode (CENTER);
        image(this.image,0,0,this.w,this.h);
        pop ();
    }

}