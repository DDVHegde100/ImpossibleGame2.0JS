var wall1 = createSprite(200, 130, 220, 4);
var wall2 = createSprite(200, 300, 220, 4);
var wall3 = createSprite(90, 153, 4, 50);
var wall4 = createSprite(90,275, 4, 50);
var wall5 = createSprite(310, 153, 4, 50);
var wall6 = createSprite(310, 275, 4, 50);
var wall7 = createSprite(69, 180, 43, 4);
var wall8 = createSprite(69, 250, 43, 4);
var wall9 = createSprite(330, 180, 43, 4);
var wall10 = createSprite(330,250, 43, 4);
var wall11 = createSprite(45, 215, 4, 72);
var wall12 = createSprite(350,215, 4, 72);
var Ding = createSprite(66, 215, 20, 20);
var dot1= createSprite(126, 215, 15, 15);
var dot2= createSprite(176, 215, 15, 15);
var dot3= createSprite(226, 215, 15, 15);
var dot4= createSprite(276, 215, 15, 15);
var Count= 0;
Ding.shapeColor="green";
dot1.shapeColor="red";
dot2.shapeColor="red";
dot3.shapeColor="red";
dot4.shapeColor="red";
dot1.velocityY=7;
dot2.velocityY=-7;
dot3.velocityY=7;
dot4.velocityY=-7;
function draw() {
  background("yellow");
  drawSprites();
  if (keyDown("right")) {
  Ding.x=Ding.x + 3;
 }
 if (keyDown("LEFT_ARROW")) {
  Ding.x=Ding.x - 3;
 }
 dot1.bounceOff(wall1);
 dot1.bounceOff(wall2);
 dot2.bounceOff(wall1);
 dot2.bounceOff(wall2);
 dot3.bounceOff(wall1);
 dot3.bounceOff(wall2);
 dot4.bounceOff(wall1);
 dot4.bounceOff(wall2);
 if (Ding.isTouching(wall11)|| Ding.isTouching(wall12)||Ding.isTouching(dot1)||Ding.isTouching(dot2)||Ding.isTouching(dot3)||Ding.isTouching(dot4)) {
   Ding.x=66;
   Ding.y=215;
   Count=Count+1;
 }
 
}
