 // for red, green, and blue color values
var r, g, b;

function setup() { 
  createCanvas(1300, 680); //creating the canvas
  // Pick colors randomly
  background('#fae'); //drawing background
  r = random(255); //red variable
  g = random(255);//green variable
  b = random(255);//green variable
  
}

function draw() {
  // Draw a circle
  strokeWeight(2); //stroke size
  stroke(r, g, b); //color/variables
  fill(r, g, b, 127);//filling circle with color
  ellipse(20, 200, 200, 200);//making circle
  triangle(10, 2, 58, 20, 1000, 75);
  // Draw a rectangle with rounded corners, each having a radius of 20.
rect(32, 21, 56, 60, 90);
rect(220, 2, 100, 70);
if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  
 triangle(mouseX, mouseY, 80, 200, 86, 200);
 
}


}

// When the user clicks the mouse
function mousePressed() {//changing the cicle color when mouse is pressed
  // Check if mouse is inside the circle

    // Pick new random color values
    r = random(255);//variable
    g = random(255);//variable
    b = random(255);//variable
    function setup() {
  createCanvas(640, 480);
}



  
}



