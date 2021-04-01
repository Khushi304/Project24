
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(20,20,50,100);
rubber = new Rubber(900,450,70);
plane = new Plane (600,height,1200,20)
iron = new Iron(300,350)
stone = new Stone (700,320,100,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
hammer.display();
stone.display();
rubber.display();
plane.display();
iron.display();
  drawSprites();
 
}



