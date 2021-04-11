
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//bobDiameter= 40;
	roof = new Roof (370,100,500,25)
	bobObject1 = new Bob (230,400,80,80);
	bobObject2 = new Bob (315,400,80,80);
	bobObject3 = new Bob (400,400,80,80);
	bobObject4 = new Bob (485,400,80,80);
	rope1 = new Rope (bobObject1.body, roof.body,10, 0)
	rope2 = new Rope (bobObject2.body, roof.body,50, 0)
	rope3 = new Rope (bobObject3.body, roof.body,100, 0)
	rope4 = new Rope (bobObject4.body, roof.body,150, 0)

	//Create the Bodies Here.


	
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bob1.body,bob1.body.position,
								{x:-50,y:-45});
	
		  }
	}

function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("gray");
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}



