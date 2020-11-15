const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, groundb1;
var hex, chain, sling;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  hex = new Hex(40, 100, 50, 50);
  groundb1 = new Ground(390, 300, 250, 10)
  ground = new Ground(400,400,900,50)
  //level 1
  b1 = new Box(300, 275, 30, 40, "lightblue");
  b2 = new Box(330, 275, 30, 40, "lightblue");
  b3 = new Box(360, 275, 30, 40, "lightblue");
  b4 = new Box(390, 275, 30, 40, "lightblue");
  b5 = new Box(420, 275, 30, 40, "lightblue");
  b6 = new Box(450, 275, 30, 40, "lightblue");
  b7 = new Box(480, 275, 30, 40, "lightblue");

  //level 2
  b8 = new Box(330, 235, 30, 40, "lightpink");
  b9 = new Box(360, 235, 30, 40, "lightpink");
  b10 = new Box(390, 235, 30, 40, "lightpink");
  b11 = new Box(420, 235, 30, 40, "lightpink");
  b12 = new Box(450, 235, 30, 40, "lightpink");

  //level 3
  b13 = new Box(360, 195, 30, 40, "turquoise");
  b14 = new Box(390, 195, 30, 40, "turquoise");
  b15 = new Box(420, 195, 30, 40, "turquoise");

  //level 4
  b16 = new Box(390, 155, 30, 40, "gray");
  sling = new Chain(this.hex.body, { x: 100, y: 100 });

}

function draw() {
  background(56, 44, 44);
  Engine.update(engine);
  strokeWeight(4);

  groundb1.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  hex.display();
  sling.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(hex.body,{x:235, y:420})
		sling.attach(hex.body);
	}
}