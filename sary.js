function setup() {
  createCanvas(1900,1050)
}

function draw() {
  if (mouseIsPressed) {
    fill(color(0, 0, 255));}
   else{
    fill(color('red'));
rect(20, 20, 60, 60);
  }
  ellipse(mouseX, mouseY, 80, 80);
}