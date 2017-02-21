// for red, green, and blue color values
var r, g, b;
var r2, g2, b2;

function setup() {
  createCanvas(1300,680); // create a blank canvas that's 720 pixels wide and 400 pixels tall
  // Pick colors randomly
  r = random(255); // random red hue
  g = random(255); // random green hue
  b = random(255); // random blue hue
  background(r2, g2, b2);// opacity of background
}

function draw() {
 
  // Draw a circle
  strokeWeight(15); // how thick the stroke is of the border
  stroke(r, g, b); // what color the stroke (border) is
  fill(r, g, b, 127); // what color the shape is filled with and its opacity
  ellipse(mouseX, mouseY, 50, 50); // what shape, where it's located on the canvas, and how tall/wide
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, mouseX, mouseY); // measuring the distance between the center of the circle and the mouse
  if (d < 50) { // if it's in the circle, do what's below
    // Pick new random color values for circle
    r = random(255); // when mouse is pressed, changes to random red hue
    g = random(255); // when mouse is pressed, changes to random green hue
    b = random(255); // when mouse is pressed, changes to random blue hue
    // pick random color value for background
    r2 = random(255)
    g2 = random(255)
    b2 = random(255)
  }
}
