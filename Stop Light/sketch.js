var colr1 = 'white'
var colr2 = 'white'
var colr3 = 'white'

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);
} 

function draw() {
   background(220);
   fill('black')
   rect(195,200,10,150);
    rect(170,70,60,160);
    fill(colr1);
  ellipse(200,100,40,40);
  fill(colr2);
  ellipse(200,150,40,40);
  fill(colr3);
  ellipse(200,200,40,40); 
if (mouseY < windowHeight/3){
  colr1 = 'green'
  colr2 = 'white'
  colr3 = 'white'
}
else if (mouseY < 2 * windowHeight/3){
  colr1 = 'white'
  colr2 = 'yellow'
  colr3= 'white'
}
else {
  colr1 = 'white'
  colr2 = 'white'
  colr3 = 'red'
  
}
}