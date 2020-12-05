var wall, thickness;
var bullet,speed, weight; 



function setup() {

  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  
  bullet=createSprite(50, 200, 50,50);
  bullet.shapeColor="white";
  bullet.scale=0.5;
  bullet.velocityX=speed;

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);

  thickness=random(22,83)

}

function draw() {
  background("black");

  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX=0;

    if((0.5*weight*speed*speed)/thickness*thickness*thickness){
      bullet.shapeColor="RED"
    }else if((0.5*32*223*223)/70*70*70){
      bullet.shapeColor="green"
    }else if((0.5*32*223*223)/40*40*40){
      bullet.shapeColor="red"
    }

  }

  drawSprites();
}