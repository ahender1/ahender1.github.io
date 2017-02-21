// Where is the circle
var x, y;

function setup() { // setting up the program
  createCanvas(1300,680); // setting up the canvas, width and height
  // Starts in the middle
  x = width / 2; // width of the canvas
  y = height; // height of the canvas
}

function draw() { // setting up the background
   background(80, 50, 220); // size of the background
  
  // Draw a circle
  stroke(50); // thickness of the circle
  fill(0, 200, 200); //color of the circle
  ellipse(x, y, 50, 50); // size/dimensions of the circle
  
  stroke(50); // thickness of the circle
  fill(0, 200, 200); //color of the circle
  ellipse(x, y, 50, 50);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
    
     stroke(50); // thickness of the circle
  fill(0, 200, 200); //color of the circle
  ellipse(x, y, 50, 50);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-2, 1);
  // Moving up at a constant speed
  y = y - 3;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
  
}