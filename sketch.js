
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(530, 500, 30);
	bob2 = new Bob(590, 500, 30);
	bob3 = new Bob(650, 500, 30);
	bob4 = new Bob(710, 500, 30);
	bob5 = new Bob(770, 500, 30);
	
	roof = new Roof(650, 100, 320, 20)

	rope1 = new Rope(bob1.body, {x : 530, y : 100});
	rope2 = new Rope(bob2.body, {x : 590, y : 100});
	rope3 = new Rope(bob3.body, {x : 650, y : 100});
	rope4 = new Rope(bob4.body, {x : 710, y : 100});
	rope5 = new Rope(bob5.body, {x : 770, y : 100});


	//Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  roof.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x : -250, y : -250});
	}
}