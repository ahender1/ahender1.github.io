function setup() {
  createCanvas(1900,1050);
}

function draw() {
  if (mouseIsPressed) {
    fill(110, 20, 210);
  } else {
    fill(15, 20, 35, 0);
  }
  rect(mouseX, mouseY, 80, 80);
}