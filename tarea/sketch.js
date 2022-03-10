var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("mayortomas.png");
  boyImg = loadAnimation("et1.png");
}

function setup(){
  
  createCanvas(500,600);
  
// Mover el fondo
path=createSprite(300,0.250);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//crear sprite de niño corriendo
boy = createSprite(80,540,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(100,90,200,900);

leftBoundary.invisible = false;
leftBoundary.visible = true;
leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo

  if(path.y > 1250 ){
    path.y = height/2;
  }

  if (path.y > 1250 ){
   
  path.y = height/2;
  }

  if(path.y > 1250 ){
path.y = height/2;}

if(path.y > 1250 ){path.y = height/2;}
  
  drawSprites();
}
