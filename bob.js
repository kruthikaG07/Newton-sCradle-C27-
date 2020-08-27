class Bob{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:1,
        friction:0,
        density:1.2
    }

    this.radius = radius/2;
    this.body = Bodies.circle(x,y,radius,options);
    this.radius =50;
    World.add(world,this.body);
    

    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position
        push();
        ellipseMode(CENTER);
        fill("pink");
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    }