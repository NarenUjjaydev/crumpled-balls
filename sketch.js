//Crumpled ball.

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,
    box1,box2,box3,
    ground,
    paperObject,groundObject;


function setup() {
  createCanvas(1000,500);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  paperObject = new Paper(100,450,80)
  groundObject = new Ground(500,500,1000,20)
  box1 = new Dustbin(765,450,20,180)
  box2 = new Dustbin(850,490,150,20)
  box3 = new Dustbin(935,450,20,180)
  ground = createSprite(500,500,1000,20);
  ground.shapeColor = "yellow";

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("red"); 
  paperObject.display();
  box1.display();
  box2.display();
  box3.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:160,y:-170});
    
  }
  
}