
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;

var ground;
var rope3,rope1,rope2,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,350,30);
	bob2 = new Bob(260,350,30);
	bob3 = new Bob(320,350,30);
	bob4 = new Bob(380,350,30);
	bob5 = new Bob(440,350,30);
	ground = new Ground(350,100,500,20);
	rope1 = new Chain(bob1.body,ground.body,-120,0);
	rope2= new Chain(bob2.body,ground.body,-60,0);
	rope3 = new Chain(bob3.body,ground.body,0,0);
	rope4= new Chain(bob4.body,ground.body,+60,0);
	rope5 = new Chain(bob5.body,ground.body,+120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  
 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
 ground.display();
 rope3.display();
 rope2.display();
 rope1.display();
 rope4.display();
 rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:85})
	}
}

