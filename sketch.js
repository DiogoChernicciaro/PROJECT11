var sea, ship;
var seaImg,shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");


}

function setup(){
 createCanvas(400,400);
 sea = createSprite (50,160,20,50);
 sea.addAnimation("marzao",seaImg);


ship = createSprite(200,230,50,50);
ship.addAnimation("nav", shipImg1);
ship.scale = 0.3;



}


function draw() {
  background(seaImg);
    drawSprites();
 
    if(sea.x <0){
      sea.x = sea.width/2;
    }

}