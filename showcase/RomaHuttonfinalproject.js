var message = "Roma",
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x, y; // x and y coordinates of the text

function preload() {
  font = loadFont('LeagueGothic-Regular.otf');
}

function setup() {
  createCanvas(1300, 680);
  r = random(255);
  g = random(255);
  b = random(255);

  // set up the font
  textFont(font);
  textSize(fontsize);

  
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  fill(204, 120);
  rect(0, 0, width, height);

  //when tickle is clicked on it chages colors randomly
  strokeWeight(4)
  stroke(0)
  fill(r, g, b);
  text(message, x, y);
  bounds = font.textBounds(message,x,y,fontsize);
 if (mouseIsPressed)
{r = random(255);
  g = random(255);
  b = random(255);
}
 
  if (( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w && //moves the word "Roma"
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h))
    {
    x += random(-10, 10);
    y += random(-10, 10);
    if (( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h &&mouseIsPressed)) { //when you click on the work, it becomes bigger
      textSize(fontsize*2);
   
    } //grew text when pressed on
//function mousePressed() {
  //fontsize = fontsize*2
}
  
  }
