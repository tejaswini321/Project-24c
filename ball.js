class Ball{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            desnsity:1.2
        }
        this.body = Bodies.circle(40,670,20,options);

        World.add(world,this.body);
    }
     display(){
        var pos = this.body.position
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,15,15);
     }
}