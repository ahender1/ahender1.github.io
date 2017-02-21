// for red, green, and blue color values
var r, g, b;
var r2, g2, b2;
var r3, g3, b3;
var r4, g4, b4;
var r5, g5, b5;

  
function setup() {
  createCanvas(1300, 680);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(6,249,249);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(200, 200, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r2, g2, b2);
  fill(r2, g2, b2, 127);
  ellipse(280, 270, 150, 150);
  
  strokeWeight(2);
  stroke(r3, g3, b3);
  fill(r3, g3, b3, 127);
  ellipse(350, 200, 150, 150);
  
  strokeWeight(2);
  stroke(r4, g4, b4);
  fill(r4, g4, b4, 127);
  ellipse(430, 270, 150, 150);
  
  strokeWeight(2);
  stroke(r5, g5, b5);
  fill(r5, g5, b5, 127);
  ellipse(500, 200, 150, 150);
}
// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 200, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
  var d2 = dist(mouseX, mouseY, 280, 270);
  if (d2 < 100) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }
  var d3 = dist(mouseX, mouseY, 350, 200);
  if (d3 < 100) {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
  }
  var d4 = dist(mouseX, mouseY, 430, 270);
  if (d4 < 100) {
    r4 = random(255);
    g4 = random(255);
    b4 = random(255);
  }
   var d5 = dist(mouseX, mouseY, 500, 200);
  if (d5 < 100) {
    r5 = random(255);
    g5 = random(255);
    b5 = random(255);
  }
}





