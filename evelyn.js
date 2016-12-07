function setup() {
  createCanvas(1900,1050);
  background('#222222');
}

function draw() {
  if (mouseIsPressed) {
    fill(0,0,255);
  } else {
    fill(0,255,255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}