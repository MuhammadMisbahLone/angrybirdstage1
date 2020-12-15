class Ground{
constructor() {
 var goptions = {isStatic:true};
 this.body = Bodies.rectangle(600,380,1200,40,goptions);
 World.add(world,this.body);
}
display() {
 rectMode(CENTER);
 rect(this.body.position.x,this.body.position.y,1200,40);
}
}