// A HTML range slider
var slider;//  varrible
x=2;//moving line
y=5;//moving line
z=3;//moving line
w=4;//moving line


function setup() {
  createCanvas(1300,680);//how big the canvas is
  // hue, saturation, and brightness
  colorMode(HSB, 255);//hsb= the change of color light, bright, saturation, hue
  // slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(0, 255, 127);// the amount of colors that you cna make when u move it
slider. position(6,655)
 
}


function draw() {
  background(200,200);// sets the color 
  strokeWeight(2);// how thick the boarder is around the circle

  // Set the hue according to the slider
  stroke(slider.value(), 255, 255);// boarder
  fill(slider.value(), 255, 255, 127);// colors used to fill the circle
  triangle(200, 350, 380, 100,550, 350);// T
  
  strokeWeight(4);// outline of T
  triangle(100, 75, 58, 20, 156, 75);// T #2
    strokeWeight(9);// lickness of T
  ellipse(360, 200, 200, 200);// CIRCLE UNDER T
  arc(50, 50, 80, 80, 0, PI+QUARTER_PI, PIE);// WEIRD SHPE IN corner
  strokeWeight(8);// rect
  rect(70, 20, 55, 95, 20);// rect
  strokeWeight(4);// thickness square
  rect(200, 20, 95, 125);// square
   strokeWeight(2);// thivkness lines
  line(780, 20, 85, 400);//lines
  line(400, 20, 85, 780);
  line(x, y, z, w);//more lines
  quad(700, 301, 300, 400, 200, 200, 700, 500);// bow tie
 rect(127, 127, 127, 127);
noFill();
rect( 118,118 ,118 ,118 );

arc(470, 180, 288, 180, 528, PI+QUARTER_PI, OPEN);
 
 
}
 function  // moving line code below
 mousePressed() //( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
   // mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    {x = random(50, 500);
    y = random(50,500);
     z = random(50, 500);
      w = random(50, 500);
  }
 