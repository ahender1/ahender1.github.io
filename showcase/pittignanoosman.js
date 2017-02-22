R = 255
G = 255
B = 255
hi = 100
bye = 100
T = 255
W = 1
tie = 0
dye = 0
pie = 0
lie = 0
a = 0
b = 0
c = 0
d = 0
e = 0
f = 0
mHasBeenPressed = false
threed = false

function setup() { //setup function
  createCanvas(1300, 680); //Canvas is 900 by 600
}  

function draw(){
fill (R, G, B, T)


//Nothingpressed()

QPressed()

WPressed()

EPressed()

RPressed()

TPressed()

YPressed()

UPressed()

IPressed()

OPressed()

PPressed()

APressed()

SPressed()

DPressed()

FPressed()

GPressed()

HPressed()

JPressed()

KPressed()

LPressed()

uparrowPressed()

downarrowPressed()

leftarrowPressed()

rightarrowPressed()

colored()

smush()

ticklen()

drawshape()

reset()

MPressed()



}




function QPressed(){
  if (key === 'Q') {
    R = 255
    G = 0
    B = 0

}
}

function WPressed(){
  if (key === 'W') {
    R = 255
    G = 171
    B = 0
}
}

function EPressed(){
  if (key==='E') {
    R=247
    G=255
    B=0
}
}

function RPressed(){
  if (key==='R') {
  R=188
  G=255
  B=0
}
}

function TPressed(){
  if (key==='T') {
  R=0
  G=255
  B=0
}
}

function YPressed(){
  if (key==='Y') {
  R=0
  G=255
  B=255
}
}

function UPressed(){
  if (key==='U') {
  R=0
  G=0
  B=255
}
}

function IPressed(){
  if (key==='I') {
  R=145
  G=0
  B=255
}
}

function OPressed(){
  if (key==='O') {
  R=255
  G=0
  B=255
}
}

function PPressed(){
  if (key==='P') {
  R=255
  G=0
  B=205
}
}

function APressed(){
  if (key==='A') {
  hi = 10
  bye = 10
}
}

function SPressed(){
  if (key==='S') {
  hi = 35
  bye = 35
}
}

function DPressed(){
  if (key==='D') {
  hi = 60
  bye = 60
}
}


function FPressed(){
  if (key==='F') {
  hi = 85
  bye = 85
}
}


function GPressed(){
  if (key==='G') {
  hi = 110
  bye = 110
}
}


function HPressed(){
  if (key==='H') {
  hi = 135
  bye = 135
}
}

function JPressed(){
  if (key==='J') {
  hi = 160
  bye = 160
}
}

function KPressed(){
  if (key==='K') {
  hi = 185
  bye = 185
}
}

function LPressed(){
  if (key==='L') {
  hi = 210
  bye = 210
}
}

function uparrowPressed(){
if (keyIsDown(UP_ARROW)) {
T = T - 2

}
}

function downarrowPressed(){
 if (keyIsDown(DOWN_ARROW)) {
T = T + 2

}
}

function leftarrowPressed(){
 if (keyIsDown(LEFT_ARROW)) {
 
 W = W + 2
}
}

function rightarrowPressed(){
 if (keyIsDown(RIGHT_ARROW)) {
 
 W = W - 2
}
}

function colored(){
if (mouseIsPressed) {
  
  R=0
  G=0
  B=0
  
}
}

function smush(){
 if (key==='z') {
hi = 30
bye = 75
tie = 58
dye = 20
pie = 86
lie = 75

}
}

function ticklen(){
 if (key==='n') {
hi += random(-50, 50);
    bye += random(-25, 25);
}
}

function drawshape(){
  if (mHasBeenPressed){
triangle(mouseX, mouseY, mouseX, mouseY, a, b, c, d, e, f);
stroke
 (0,0,0);
    strokeWeight(W);

}
else{ ellipse(mouseX, mouseY, hi, bye, tie, dye, pie, lie); // makes a circle
stroke
 (0,0,0);
    strokeWeight(W);
  }
}


function reset(){
 if (key==='b') {
stroke
(0,0,0);
   strokeWeight(W);
R= 255
B = 255
G = 255
mHasBeenPressed = false
Sphere = false

hi = 100
bye = 100
tie = 0
dye = 0
pie = 0
lie = 0

}
}

function MPressed(){
  
if (key==='m') {
  mHasBeenPressed = true
}
}

