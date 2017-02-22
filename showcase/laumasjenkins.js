// Where is the circle????? :)
var x1, y1; //declaring the variables x1 and y1
var x2, y2; //declaring the variables x2 and y2
var x3, y3; //declaring the variables x3 and y3
var x4, y4; //declaring the variables x4 and y4
var x5, y5; //declaring the variables x5 and y5
b = 255
tB =false

function setup() { //setup function
  createCanvas(1300, 680); //create canvas 1300px wide and 680px tall
  // Starts in the middle
  x1 = width / 2; //says that x1 is in the very middle horizontally/the whole width split in half
  y1 = height; //y1 is at the bottom of the canvas aka 1300
  x2 = width / 2 //says that x2 is in the very middle horizontally/the whole width split in half
  y2 = height //y2 is at the bottom of the canvas aka 1300
  x3 = width / 2 //says that x3 is in the very middle horizontally/the whole width split in half
  y3 = height //y3 is at the bottom of the canvas aka 1300
  y4 = height / 2 //says that x3 is in the very middle horizontally/the whole width split in half
  x4 = width //y3 is at the bottom of the canvas aka 1300
  y5 = height / 2 //says that x3 is in the very middle horizontally/the whole width split in half
  x5 = 0 //y3 is at the bottom of the canvas aka 1300
} //closes setup function

function draw() { //draw function
  background(b); 
  
  if (b>255) {
    tB = true
  }
  if (b<0) {
    tB = false
  }
  if(tB) {
    b=b-1
  }
  else {
    b=b+1
  }
  
  // Draw a circle
  fill(30, 144, 255); //middle of the circle is navy blue (RGB) 
  //because only one value, assumes that all the values are the same, making it black, white, or a shade of grey
  noStroke() // takes out the outline/ stroke
  ellipse(x1, y1, 50, 50); //circle's position = determined by lines 8 and 9, size is 40px both tall and wide
  fill(255, 140, 0) //middle of the circle is dark orange (RGB)
  ellipse(x2, y2, 30, 30) //circle's position = determined by lines 10 and 11, size is 20px both tall and wide
  fill(127, 255, 0) //middle of the circle is dark orange (RGB)
  ellipse(x3, y3, 25, 25) //circle's position = determined by lines 10 and 11, size is 20px both tall and wide
  fill(220, 20, 60)
  rect(x4, y4, 60, 60)
  fill(186, 85, 211)
  rect(x5, y5, 45, 45, 10)
  
  // Jiggling randomly on the horizontal axis
  x1 = x1 + random(-20, 20); //when the draw function runs, either goes left or right by one pixel
  // Moving up at a constant speed
  y1 = y1 - 3; //y decreases by 1 every time the draw function goes through itself/how to adjust the speed they move up at
  x2 = x2 + random(-15, 15); //when the draw function runs, either goes left or right by one pixel
  y2 = y2 - 2 //t decreases by 1 every time the draw function goes through itself
  x3 = x3 + random(-30, 30); //when the draw function runs, either goes left or right by one pixel
  y3 = y3 - 1 //t decreases by 1 every time the draw function goes through itself
  y4 = y4 + random(-5, 5); //when the draw function runs, either goes left or right by one pixel
  x4 = x4 - 1 //t decreases by 1 every time the draw function goes through itself
  y5 = y5 + random(-10, 10); //when the draw function runs, either goes left or right by one pixel
  x5 = x5 + 1 //t decreases by 1 every time the draw function goes through itself
  
  // Reset to the bottom
  if (y1 < 0) { //if the circle goes above the screen's boundary/is less than 0
    y1 = height; //go back to the bottom
  } //closes if statement
  
   // Reset to the bottom
  if (y2 < 0) { //if the circle goes above the screen's boundary/is less than 0
    y2 = height; //go back to the bottom
  } //closes if statement
  
   // Reset to the bottom
  if (y3 < 0) { //if the circle goes above the screen's boundary/is less than 0
    y3 = height; //go back to the bottom
  } //closes if statement
  
  
  if (x4 < 0) { //if the circle goes above the screen's boundary/is less than 0
    x4 = width; //go back to the bottom
  } //closes if statement
  
  
   if (x5 > 1300) { //if the circle goes above the screen's boundary/is less than 0
    x5 = 0; //go back to the bottom
  } //closes if statement
  
  
  if (x1 < 0) {
    x1 = width-25;
  }
  
  if (x1 > 1300) {
    x1 = 26;
  }
  
  if (x2 < 0) {
     x2= width-25;
  }
  
  if (x2 > 1300) {
    x2 = 16
  }
  
  if (x3 < 0) {
     x3= width-25;
  }
  
  if (x3 > 1300) {
    x3 = 16
  }
 
  if (y4 < 0) {
     y4= height-25;
  }
  
  if (y4 > 680) {
    y4 = 16
  }
  
    if (y5 < 0) {
     y5= height+25;
  }
  
  if (y5 > 680) {
    y5 = 16
  }
 
} //closes draw function