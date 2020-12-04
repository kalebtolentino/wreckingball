const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball, ballChain;
var box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

  ball = new Ball(200,200);

  box1 = new Box(400,320,50,50);
  box2 = new Box(400,270,50,50);
  box3 = new Box(400,220,50,50);
  box4 = new Box(400,170,50,50);
  box5 = new Box(400,120,50,50);
  box6 = new Box(350,320,50,50);
  box7 = new Box(350,270,50,50);
  box8 = new Box(350,220,50,50);
  box9 = new Box(350,170,50,50);
  box10 = new Box(350,120,50,50);

  ballChain = new Ballchain(ball.body,{x:200, y:50});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  
  ball.display();
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  ballChain.display();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}