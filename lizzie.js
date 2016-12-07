function setup() {
  createCanvas(1900, 1050);
}

function draw() {
  if (mouseIsPressed) {
    fill(124, 66, 189);
  } else {
    fill(15, 20, 35, 5);
  }
  triangle(mouseX, mouseY, 80, 80);
}