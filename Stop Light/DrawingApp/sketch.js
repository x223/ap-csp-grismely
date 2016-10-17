var weight = 2
var strokeColor = "black"

function setup() {
  createCanvas(windowWidth, windowHeight)
textSize(10)
text('b = ' + 'Blue' + " | p = " +"Pink " + " | g = " + "Green " + " | Eraser = " + "press 1", 10, 10)
  
}

function draw() {

  if (mouseIsPressed) {
    stroke(strokeColor)
    strokeWeight(weight)
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyTyped() {
  if (key === 'b') {
    strokeColor = 'blue';
  } else if (key === 'p') {
    strokeColor = '#E32173';
  } else if (key === 'g'){
  strokeColor = 'green'
  }
//eraser
else if (key === '1'){
  strokeColor = 'white'
  weight = 35
}
 
}