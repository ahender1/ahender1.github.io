var message = "Touch Me", //word appearing on screen as sprite
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 100,
  x, y; // x and y coordinates of the text
  var r, g, b;

function preload() {
  font = loadFont('LeagueGothic-Regular.otf'); //font of "Tickle"
}

function setup() {
  createCanvas(1300, 680);
  background(0, 0, 255);//creates background 710 pixels wide and 400 tall
  //pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  
  // set up the font
  textFont(font); // tells computer to draw font
  textSize(fontsize); // tells font size
   /*
 function mousePressed () {
   // press any key to change colors
   var d = dist (mouseX, mouseY, x, y);
   if (d < 100)
   // pick random color values
   r = random(255);
   g = random(255);
   b = random(255);
   
 }
  */

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize); //Returns a tight bounding box for the given text string using this font
  x = width / 2 - bounds.w / 2; //changes the variable "bounds"
  y = height / 2 - bounds.h / 2; //changes the variable "bounds"
}

function draw() {
  // instead of clearing the background, fade it by drawing
  // a semi-transparent rectangle on top
  background(0, 0, 255);// redraw backround everytime
  fill(204,200,120, 100);
  rect(0, 3, width, height); //blurry fill as "Tickle" moves

  // write the text in black and get its bounding box
  fill(r, g, b);
  text(message, x, y); //text that desplays "Tickle"
  bounds = font.textBounds(message,x,y,fontsize);
  

  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x += random(-5, 5);
    y += random(-5, 5);

  
  }
  
  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h && mouseIsPressed) {
  r = random(255);
   g = random(255);
   b = random(255);
    }
}