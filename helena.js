function setup() {
createCanvas(1700,1700);
  
}

function draw() {
  if (mouseIsPressed) {
    fill(100, 0, 75);
    triangle(mouseX, mouseY, 58, 20, 86, 75);
  } else {
    fill(50, 255, 255);
    triangle(mouseX, mouseY, 58, 20, 86, 75);
  }
  ellipse(mouseX, mouseY, 80, 80)
}