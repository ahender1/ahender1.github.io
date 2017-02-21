// Where is the circle
var x, y;



function setup() {
  createCanvas(1300, 680, WEBGL);
  // ^ canvas size; page size
  // Starts in the middle
  x = width / 2;
  y = height / 2; 
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ellipse(200, 200, 200);
  
  
}