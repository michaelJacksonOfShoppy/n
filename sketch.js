const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, chao;
var mao
var canvas, angle, tower, ground, cannon;
  var buletosblue=[]
  var buletoblue

function preload() {
 chao=loadImage("assets/chao.png")
}

function setup() {
 
  angleMode(DEGREES)
  angle= 15;
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  mao= new Mao(0,height-200,200,200, angle)
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 50, width , 20, options);
  World.add(world, ground);

  
}

function draw() {
  background("blue")
  Engine.update(engine);
  mao.show()
   for (var i = 0; i < buletosblue.length; i++) {
    showCannonBalls(buletosblue [i]);
  }
  image(chao, ground.position.x, ground.position.y, width, 20);


}
function keyReleased (){
  if (keyCode==32){
    buletosblue[buletosblue.length-1].shoot()
  }
}
function keyPressed (){
  if (keyCode==32){
    buletoblue=new HollowBall(mao.x+135,mao.y-90)
    buletosblue.push(buletoblue)
  } 
}

function showCannonBalls(buletoblue) {
  if (buletoblue) {
    buletoblue.display();
  }
}

 