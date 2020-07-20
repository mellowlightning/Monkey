//Global Variables
var banana,bananaImage
var obstacle,obstacleImage
var invisground,invis
var ground,backImage
var player,playerani
var score = 0
var bananaGroup,bananaimg
var obstaclesGroup,obstaclesimg

function preload(){
backImage = loadImage("jungle.jpg")
playerani =
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
bananaimg = loadImage("Banana.png")
obstacleimg = loadImage("stone.png")
}


function setup() {
  
  createCanvas(1200,400);
ground = createSprite(300,150,10,10)
ground.addImage("background",backImage)
ground.scale = 2.5
player = createSprite(60,350,10,10)
player.addAnimation("player",playerani)
player.scale = 0.2
invisground = createSprite(300,390,600,20)
invisground.visible = false;
obstaclesGroup = new Group();
bananaGroup = new Group();
}


function draw(){
  background(255); 
ground.velocityX = -5
if (ground.x < 0){
  ground.x = ground.width/2;
  }
player.collide(invisground)
player.velocityY = player.velocityY + 0.5;
if (keyDown("space")) {
    player.velocityY = -10;  
}
if (World.frameCount % 80 === 0) {
createBanana();
 
}
if (World.frameCount % 180 === 0){
createObstacle(); 
}
if (bananaGroup.isTouching(player)){
  score = score + 2
  bananaGroup.destroyEach(); 
}
if (obstaclesGroup.isTouching(player)){
player.scale = 0.2
}

  drawSprites();
text("score: "+score,10,15) 
}
function createBanana(){
var banana = createSprite(1190,320,40,10);   
banana.addImage(bananaimg)
banana.y = random(120,200); 
banana.scale = 0.05;
banana.velocityX = -5;
banana.lifetime =245; 
bananaGroup.add(banana)
}
function createObstacle(){
var obstacle = createSprite(1190,90,40,10);   
obstacle.addImage(obstacleimg)
obstacle.y = random(300,350); 
obstacle.scale = 0.4;
obstacle.velocityX = -5;
obstacle.lifetime =245; 
obstaclesGroup.add(obstacle)
}
switch(score){
  case 10: player.scale = 0.3
    break;
  case 20: player.scale = 0.4
    break;
  case 30: player.scale = 0.5
    break;
  case 40: player.scale = 0.6
    break;
    default: break;
    
}