var bullet,wall,speed,weight,thickness;

function setup(){
  bullet=createSprite(50,200,10,1);
  thickness=random(22,83);
  wall=createSprite(350,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;
}

function draw(){
  createCanvas(400,400);
  background("white");
 if(bullet.isTouching(wall)){
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

bullet.velocityX=0;

if(damage<10){
  wall.shapeColor="green";
}

if(damage>10){
  wall.shapeColor="red";
}
}
drawSprites();
}