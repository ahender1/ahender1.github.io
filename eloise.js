function setup() {
  createCanvas(1900,1050);
}

function draw() {
  if (mouseIsPressed) {
    // integer RGB notation
stroke('rgb(0,255,0)');
strokeWeight(4);
    fill(10,200,255);
  } else {
     // integer RGB notation
stroke('rgb(200,0,255)');
strokeWeight(4);
    fill(255,0,155);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
