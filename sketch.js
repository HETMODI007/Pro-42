
var iss, spacecraft, hasDocked;
var bgimg, issimg, spacecraftimg, spacecraftimg1, spacecraftimg2, spacecraftimg3;


function preload(){
  bgimg = loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
  spacecraftimg = loadImage("spacecraft1.png");
  spacecraftimg1 = loadImage("spacecraft3.png");
  spacecraftimg2 = loadImage("spacecraft4.png");
  spacecraftimg3 = loadImage("spacecraft2.png");
}
function setup() {
  createCanvas(1350 , 700);

  iss = createSprite(400, 230, 20, 20);
  iss.addAnimation("Spacecenter",issimg);
  
  spacecraft = createSprite(400,600,20,20);
  spacecraft.addAnimation("Spcacecraft",spacecraftimg);
  spacecraft.scale = 0.5;

}

function draw() {
  
  background(bgimg);
  
  edges = createEdgeSprites();
  spacecraft.collide(edges);

  //if(!hasDocked){

  //}

  if(keyCode === LEFT_ARROW){
    spacecraft.addAnimation(spacecraftimg1);
    spacecraft.x = spacecraft.x-2;
  }
  else if(keyCode === RIGHT_ARROW){
    spacecraft.addAnimation(spacecraftimg2);
    spacecraft.x = spacecraft.x+2;
  }
  else if(keyCode === UP_ARROW){
    spacecraft.y = spacecraft.y-2;
  }

  else if(keyCode === DOWN_ARROW){
    spacecraft.addAnimation(spacecraftimg3);
   
  }

  if(spacecraft.isTouching(iss)){
    spacecraft.velocityX = 0;
    spacecraft.velocityY = 0;
    text("Docking Successful");
  }
  
  drawSprites();
}

