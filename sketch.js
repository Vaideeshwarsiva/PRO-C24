const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var side1, side2, side3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,200,20);

	side1 = new Dustbin(650,640,20,40);
	side2 = new Dustbin(780,640,20,40);
	side3 = new Dustbin(715,670,150,20);

	ground = new Ground(200, 690, 1200, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  side3.display();
  side1.display();
  side2.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 65, y: -65});
	}
}

