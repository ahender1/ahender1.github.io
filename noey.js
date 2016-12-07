function setup() {  
  createCanvas(1900,1050);
}

function draw() {
  if (mouseIsPressed) {
    fill(255,10,85)
  } else {
    fill(110,128,200)
  }
  rect(mouseX, mouseY, 50, 50);
}