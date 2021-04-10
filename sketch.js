 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 
 var world, engine;

 var starnight,starnightImage;
 var fairy,fairy_flying, fairyAnimation;
 var starSprite,starImage;
 var starBody;
 var music;

function preload(){
   //preload the images here
   starnightImage = loadImage("images/starnight.png");
   fairy_flying = loadAnimation("images/fairy1.png","images/fairy2.png");
   starImage = loadImage("images/star.png");
   music = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(900, 570);
 
  starnight = createSprite(350,350.10,10);
  starnight.addImage("starnight",starnightImage);
  
  fairy = createSprite(200,400,10,10);
  fairy.addAnimation("fairy",fairy_flying);
  fairy.scale = 0.2;
 
  music.play();
  
  starSprite = createSprite(700,50,50,50);
  starSprite.addImage("starSprite",starImage)
  starSprite.scale = 0.2;

  
  
  engine = Engine.create();
  world = engine.world;
  
  var options ={
    isStatic : true

  }

  starBody = Bodies.rectangle(700,50,50,50,options);
  World.add(world,starBody);

 
 
 
    Engine.run(engine);

}


function draw() {
  background("black");
  rectMode(CENTER);

  starSprite.x = starBody.position.x;
  starSprite.y = starBody.position.y;

  if (starBody.position.y > 360){
    Matter.Body.setStatic(starBody,true)
  }
 
 

  drawSprites();

}

function keyPressed(){

  if (keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false)
  }

  if (keyCode === RIGHT_ARROW){
  fairy.x += 20;
  }
  
  if (keyCode === LEFT_ARROW){
    fairy.x -=20;
  }
  
}



