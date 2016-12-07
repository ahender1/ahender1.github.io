function setup() {
   createCanvas(1900, 1050)
}
  
function draw() {
if (mouseIsPressed) {
    fill(13, 255, 255);
  } else {
    fill('rgb(0,255,0)');
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
  
    fill('#fae');
  
  }
  
  if (keyIsDown(LEFT_ARROW)) {
  
    fill(color(0, 0, 255));
  }
  ellipse(mouseX, mouseY, 130, 130);
  
}
  
