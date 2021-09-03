class particle {
    constructor (x, y){
    var options = {
        restitution: 1, 
        friction: 0.5,
        density:1
    }
    this.r = 10;
    this.body = Bodies.circle (x, y, 10, options);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    World.add (world, this.body)
    }
    display (){
        var loc = this.body.position;
        var ang = this.body.angle;
        push ();
        translate (loc.x, loc.y);
        rotate (ang);
        strokeWeight(10);
        ellipseMode(RADIUS);
        stroke(this.color);
        ellipse(0,0, 10, 10);
        pop();
    }
};