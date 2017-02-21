// Find the circle! yay fun
var x, y;
katie = 230
alison = false
//variable "katie" is blue color for background, variable "alison" helps change background back to green, and then to cyan
flamingo = 25
cake = false

function setup() {
  createCanvas(1300, 680);
  // Begins at center point
  x = width / 2;
  y = height;
}

function draw() {
  background(0, 255, katie);
  
  if (katie>255){
    // color is cyan shade, set alison to TRUE
    alison=true
  }
  
  if(alison){
    // go back to zero, turn green
    katie = katie-1
  }
  else{
      katie=katie+1
      // go back to 255, turn cyan shade
  }
  
  if (katie<0){
    alison=false
    // color is green, set alison back to FALSE
  }
  
  // Draw a magic dot
  stroke(50);
  ellipse(x, y, flamingo, flamingo);
  
   if (flamingo>200){
    // circle is 200 by 200, set cake to TRUE
    cake=true
  }
  
  if(cake){
    // go back to 25 by 25, decrease size
    flamingo = flamingo-.5
  }
  else{
      flamingo=flamingo+.5
      // go to 200 by 200, increase size
  }
  
  if (flamingo<26){
    cake=false
    // flamingo is 25 by 25, set cake back to FALSE
  }
  
  if (mouseIsPressed) {
    fill(225,125,255);
    // makes dot bright purple when mouse is pressed
  } else {
    fill(250,0,50);
    // makes dot strawberry when mouse is not pressed
  } if (keyIsDown(LEFT_ARROW)) {
    fill(250,120,90);
    }
    // makes dot salmon when left arrow key is pressed
    if (keyIsDown(RIGHT_ARROW)) {
    fill(250,0,90);
    }
    // makes dot hot pink when right arrow key is pressed
    if (keyIsDown(UP_ARROW)) {
    fill(126,255,239);
    }
    // makes dot light aqua when up arrow key is pressed
    if (keyIsDown(DOWN_ARROW)) {
    fill(250,255,100);
    }
    // makes dot light yellow when down arrow is pressed
    if (keyIsDown(ENTER)) {
    fill(255,225,225);
    }
    // makes dot turn blush pink when enter key is pressed
    if (keyIsDown(BACKSPACE)) {
    fill(150,0,0);
    }
    // makes dot turn maroon when delete key is pressed
    if (keyIsDown(ALT)) {
    fill(131,255,0);
    }
    // makes dot turn lime when alt key is pressed
    if (keyIsDown(32)) {
    fill(100,100,100);
    }
    // makes dot turn gray when space key is pressed
    if (keyIsDown(81)) {
    fill(250,255,225);
    }
    // makes dot turn ivory when Q key is pressed
    if (keyIsDown(87)) {
    fill(200,255,225);
    }
    // makes dot turn cucumber when W key is pressed
    if (keyIsDown(69)) {
    fill(255,250,225);
    }
    // makes dot turn peaches and cream when E key is pressed
    if (keyIsDown(82)) {
    fill(200,100,100);
    }
    // makes dot turn mauve when R key is pressed
    if (keyIsDown(84)) {
    fill(0,200,190);
    }
    // makes dot turn cerulean when T key is pressed
    
    
    
  // Shakes around randomly when traveling up y-axis
  x = x + random(-1, 1);
  // Moves up y-axis at same speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

