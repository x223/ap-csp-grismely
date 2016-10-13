var clr = "red"
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
   background(220);
   fill(clr);
  ellipse(mouseX,mouseY,60,60);
  if(mouseX <windowWidth/5) {
    clr = 'yellow'
  } else if (mouseX < 2 * windowWidth /5) {
    clr = 'black'
  } else if (mouseX < 3 * windowWidth/5){
    clr = 'green'
  } else if (mouseX < 4 * windowWidth/5) {
    clr = "blue"
  } else {
    clr = 'purple'
  }
  
}