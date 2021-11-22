const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
var snowFlake = []; 
var engine, world; 
var backgroundImg;
function preload(){
backgroundImg=loadImage("snow2.jpg")

}
function setup(){
//create the canvas 
createCanvas(1200,800); 
//create the engine and add it to the world 
engine = Engine.create(); 
world = engine.world;

}






function draw() {
  background(backgroundImg);  
  Engine.update(engine)

  if (frameCount %1===0){
  snowFlake.push(new Snow(random(width/2-30),random(width/2+30),30,30))
  



  }
  drawSprites();
  for (var i = 0; i < snowFlake.length; i++){
    snowFlake[i].display(); }
}

