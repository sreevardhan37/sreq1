const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var log;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 log=createSprite(350,200,280,20);
 bobObject1=createSprite(400,400,40,40);
 
 bobObject2=createSprite(450,400,40,40);
 bobObject3=createSprite(350,400,40,40);
 bobObject4=createSprite(300,400,40,40);
 bobObject5=createSprite(250,400,40,40);
 
 rope1=createSprite(450,300,5,200);
 rope2=createSprite(400,300,5,200);
 rope3=createSprite(300,300,5,200);
 rppe4=createSprite(350,300,5,200);
 rope5=createSprite(250,300,5,200);







 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  log.display();
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
   
   display()
   {
	  var pointA =this.rope1.bodyA.position;
	  var pointA =this.rope2.bodyA.position;
	  var pointA =this.rope3.bodyA.position;
	  var pointA =this.rope4.bodyA.position;
	  var pointA =this.rope5.bodyA.position;
      





   }

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObjects.body,bobObjects.body.position,{x:85,y:-85});
    
  	}
}








