function setup() {
  createCanvas(1900, 1050);
}

function draw() {
  stroke('rgba(100%,0%,100%,0.5)');if (mouseIsPressed) {
    fill('#fae');
  } else {stroke('rgb(100%,0%,10%)');
    fill('red');
  }
  ellipse(mouseX, mouseY, 80, 80);
}
  