const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    box1 = new Box(600,330,70,70);
    box2 = new Box(820,330,70,70);
    box3 = new Box(600,210,70,70);
    box4 = new Box(820,210,70,70);
    box5 = new Box(710,120,70,70);
    pig1 = new Pig(710,340,50,50);
    pig2 = new Pig(710,210,50,50);
    log1 = new Log(710,270,20,300,PI/2);
    log2 = new Log(710,180,20,300,PI/2);
    log3 = new Log(660,120,20,180,PI/7);
    log4 = new Log(770,120,20,180,-PI/7);
    bird = new Bird(100,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   pig1.display();
   pig2.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   bird.display();
}