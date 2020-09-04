var bullet,wall,speed,weight,thickness




function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 50);
 wall=createSprite(1000,20,thickness,400)
  speed = random(223,321)
  weight= random(30,52)
  bullet.velocityX=speed
  thickness = random(23,80)
  bullet.shapeColor="red"
  wall.shapeColor="orange"
}

function draw() {
  background(0);
if(hascollided(bullet,wall)){
  bullet.velocityX=0
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  if (damage<10){
    wall.shapeColor=color(0,0,255)
  }
if (damage<10){
  wall.shapeColor=color(230,230,10);
}

  drawSprites();

}
function hascollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){

    return true}
    else {
      return false
    }
  }
  








}