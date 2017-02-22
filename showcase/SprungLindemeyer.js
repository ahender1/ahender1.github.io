// Where is the circle
var x, y; 

function setup() {
          
  createCanvas(1300, 680); //creating canvas
   background(0, 0, 0); //color of background
  // Starts in the middle
  x = width / 2; //width of canvas
  y = height; //height of canvas
}

function draw() { //draw background
 

  
  // Draw a circle
  
 
  stroke(100, 240, 50); //color of stroke
  fill(190, 90, 234); //color of fill
  triangle(x - 550, y, 13000000, 7, x, y - 24, 80, 2, x - 4, y + 900, 16, 75);
  
  stroke(0, 0, 0); //color of stroke
  fill(0, 0, 0); //color of fill
  triangle(x - 400, y, 13000000, 7, x, y - 30, 80, 2, x - 3, y + 900, 16, 75);
  //wherethe circle is and the color
  
   if (mouseIsPressed) {
        stroke(10, 100, 100);
        ellipse(mouseX, mouseY, 50, 100);
        strokeWeight(10);   
        stroke(10, 100, 100);
   }
   
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height - 250;
  }
}