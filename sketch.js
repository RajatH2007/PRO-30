const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground();
  stand1 = new Stand(480,300,250,10);
  stand2 = new Stand(790,200,200,10);
 
  //level one
  block1 = new Block(390,290,30,40);
  block2 = new Block(420,290,30,40);
  block3 = new Block(450,290,30,40);
  block4 = new Block(480,290,30,40);
  block5 = new Block(510,290,30,40);
  block6 = new Block(540,290,30,40);
  block7 = new Block(570,290,30,40);
  //level two
  block8 = new Block(420,250,30,40);
  block9 = new Block(450,250,30,40);
  block10 = new Block(480,250,30,40);
  block11 = new Block(510,250,30,40);
  block12 = new Block(540,250,30,40);
  //level three
  block13 = new Block(450,210,30,40);
  block14 = new Block(480,210,30,40);
  block15 = new Block(510,210,30,40);
  //top
  block16 = new Block(480,170,30,40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:190, y:150});
  
  Engine.run(engine);
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  
  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40,40)
  slingShot.display();

  ground.display();
  stand1.display();
  //stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("hotpink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  slingShot.attach(this.polygon);
}
