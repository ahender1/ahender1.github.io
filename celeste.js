function setup() {
  createCanvas(1900,1050);
}

function draw() {
  if (mouseIsPressed) {
    fill('#fae');
  } else {
    fill('rgba(0,255,0, 0.25)');
  }
  ellipse(mouseX, mouseY, 80, 80);
}