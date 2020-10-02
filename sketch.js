

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	//helicopterIMG=loadImage("helicopter.png")
	//packageIMG=loadImage("package.png")
//}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	


	engine = Engine.create();
	world = engine.world;

	
	

	

    box1 = new box(width/1.23, height-50, 200,20);
	box2 = new box(760,610,20,100);
	box3 = new box(540,610,20,100);
	ground1 = new ground(700,height-35,2000,20)


  paper = new paper(50,300,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ground1.display();
  box1.display();
  box2.display();
  box3.display();

  paper.display();
 
  drawSprites();

}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.applyForce( paper.body,paper.body.position,{x:85,y:-85})
   }
}



