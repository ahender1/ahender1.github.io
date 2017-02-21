// for red, green, and blue color values
var r, g, b;

function setup() {
  createCanvas(1300, 680);// HOW BIG CANVAS IS: 720WIDE 400TALL
  // Pick colors randomly
  r = random(150);//RANDOM NUMBER
  g = (0);//SAME
  b = random(255);//SAME


}
function draw() {
  background('#fae');//GRAYSCALE INTEGER VALUE 
  // Draw a circle
  strokeWeight(8);//THICKNESS
  stroke(r, g, b);//OUTLINE
  fill(r, g, b, 2000);//FILL
  ellipse(650, 200, 300, 300);// 360=XCOORDINATE 200=YCOORDINATE 200=WIDTH 200=HIGHT
  fill (255)
  ellipse(0,0, 400, 400)// Moon
  fill ('blue')
  rect(-100,400,2000,300,300)
  
}


// When the user clicks the mouse
function mousePressed() {//HOW TO ACTIVATE THE CIRCLE/CHANGE COLOR
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 650, 200);
  if (d < 100) {//D IS GREATER THAN 100
    // Pick new random color values
    r = random(150);//CHOOSES RANDOM NUMBER BETWEEN 0AND255
    g = (0);//SAME
    b = random(255);//SAME 
  }
}












