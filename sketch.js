
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5,bobDiameter
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  bobDiameter = 30;
   roof = new Roof(410,30,280,20);
   bob1 = new Bob(290,450,25);
   rope1 = new Rope(bob1.body,roof.body,bobDiameter*-2,0);
   bob2 = new Bob(340,450,25);
   rope2 = new Rope(bob2.body,roof.body,bobDiameter*-1,0);
   bob3 = new Bob(390,450,25);
   rope3 = new Rope(bob3.body,roof.body,0,0);
   bob4 = new Bob(440,450,25);
   rope4= new Rope(bob4.body,roof.body,bobDiameter,0);
   bob5 = new Bob(490,450,25);
   rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);
	

	//Create the Bodies Here.

	
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){

  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-100,y:-100})
  }
}
