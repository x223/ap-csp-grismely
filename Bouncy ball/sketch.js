var x = 50;
var y = 50;
var xdir = 10;
var ydir = 1;

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(220);
  ellipse(x, y, 60, 60);
  ellipse(y,x,60,60);
  
  x = x +  xdir;
  y = y + ydir;


  if (x >= windowWidth || x <= 25) {
    xdir = xdir * -1;
  }

  if (y >= windowHeight || y <= 25) {
    ydir = ydir * -1;
  }

}