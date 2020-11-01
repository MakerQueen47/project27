
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5, roof1, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(400,100,600,30);

	bob1 = new bob(400,500,70);
	bob2 = new bob(330,500,70);
	bob3 = new bob(470,500,70);
	bob4 = new bob(260,500,70);
	bob5 = new bob(540,500,70);

	/*var options = {

		bodyA: bob1.body,
		bodyB: roof1.body,
		
	}
	//rope1 = Constraint.create(options); */

	rope1 = new rope (bob1.body, roof1.body, 0, 0);
	rope2 = new rope (bob2.body, roof1.body, -70, 0);
	rope3 = new rope (bob3.body, roof1.body, 70, 0);
	rope4 = new rope (bob4.body, roof1.body, -70*2, 0);
	rope5 = new rope (bob5.body, roof1.body, 70*2, 0);


  
}


function draw() {
	
	Engine.update(engine);	
	rectMode(CENTER);
	background(0);


	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	/*strokeWeight(2);
	stroke("red");
	line(rope1.bodyA.position.x, rope1.bodyA.position.y, rope1.bodyB.position.x, rope1.bodyB.position.y);*/


	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof1.display();

  
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){

		console.log("works");

		Matter.Body.applyForce(bob4.body, bob4.body.position, {x:-100, y:-100});

	}
}
