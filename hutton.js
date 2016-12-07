function setup() {
  createCanvas(1900, 1050);
  background(100,100,250)
}

function draw() {
  if (mouseIsPressed) {
    fill(0,100,150);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}