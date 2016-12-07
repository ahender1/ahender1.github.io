function setup() {
  createCanvas(1900, 1050)
}

function draw() {
  if (keyIsPressed === true) {
    fill(0, 50, 100);
  } else {
    fill(255);
  }
  noStroke()
  rect(mouseX, mouseY, 80, 80)
}