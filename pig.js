class Pig{
    constructor(x,y,width,height) {
    var poptions = {restitution:0.8,friction:1.4,density:0.4};
    this.body = Bodies.rectangle(x,y,width,height,poptions);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display() {
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill("green");
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
    pop();
    }
    }