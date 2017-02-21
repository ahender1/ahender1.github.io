// Where is the circle
var x, y;
function setup() {
  createCanvas(1300,680);//720 pixels wide 400 pixels tall
  // Starts in the middle
  x = width / 2;// width is 360
  y = height;// height 
}

function draw() {
  //background(255);//what the background color is
  // Draw a circle
    colorMode(HSB)
  strokeWeight(4)
  stroke(255,204,568)
  c = color('hsl(160, 100%, 50%)');
  fill(c);//color of the inside of the circle 
   triangle(x,y-50,66,48,70,9);// circle, size
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);// how much it jiggles width/2= width+random(-1,1)
  // Moving up at a constant speed
  y = y - 1;// height= height-1 

  // Reset to the bottom
if (y < 0) {//height<0
    y = height;
  }
  // Draw a circle

   stroke('rgb(100%,0%,10%)')
  strokeWeight(4)
  c = color('hsl(284,100%,50%)');
  fill(c);//color of the inside of the circle 
   triangle(x,y-60,96,58,9,500);// circle, size
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 9);// how much it jiggles width/2= width+random(-1,1)
  // Moving up at a constant speed
  y = y - 1;// height= height-1 

  // Reset to the bottom
if (y < 0) {//height<0
    y = height;
  }
  // Draw a circle
  }



