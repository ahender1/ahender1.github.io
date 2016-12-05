function setup() {
createCanvas(1700,1700);
}

function draw() {
 if (mouseIsPressed) {
   fill(150, 255, 124);
   }else{
     fill(124, 255, 244);
 }
 triangle(mouseX, mouseY, 80,80);
 
   if (mouseIsPressed) {
    fill(66, 244, 170);
  } else {
    fill(166, 99, 255);
  }
  rect(mouseX, mouseY, 80, 80);
}
