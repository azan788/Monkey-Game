
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  console.log(ground.x);
  
  if(monkey.y>314) {
    if(keyDown("space")){
      monkey.velocityY = -8;
    }
  }
  monkey.velocityY = monkey.velocityY + 0.25;
  monkey.collide(ground);
  if(ground.x<100){
    ground.x=400
  }
  
  food();
  rock();
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime ,100,50)
}
function food() {
  if(frameCount%80 === 0) {
    banana = createSprite(450,210, 20,20)
    banana.addImage(bananaImage);
    banana.scale = 0.125;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -6;
    banana.lifetime =  80;
    foodGroup.add(banana);
  }
}
function rock() {
  if(frameCount%300 === 0) {
    obstacle = createSprite(450,310,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.225;
    obstacle.velocityX = -6;
    obstacle.lifetime =  80;
    obstacleGroup.add(obstacle);
  }
}




