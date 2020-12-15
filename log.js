class Log{
    constructor(x,y,width,height,angle) {
    var loptions = {restitution:0.8,friction:1.4,density:0.4};
    this.body = Bodies.rectangle(x,y,width,height,loptions);
    this.width = width;
    this.height = height;
    Matter.Body.setAngle(this.body,angle);
    World.add(world,this.body);
    }
    display() {
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
    pop();
    }
    }