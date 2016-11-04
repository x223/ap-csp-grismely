function setup() { 
  createCanvas(400, 400);
		input = createInput();
// 	Place the input box
	 input.position(60, 5);
} 

function draw() { 
  background(220);
		background('white');
	textFont('courier');
	
	text('Number:', 10, 20);
		var number = int(input.value());
// 	Convert that number into binary
	var num = number.toString(2);
// Convert that number into hexdecimal
	var num2 = number.toString(16);
// 	Label my output
	text('In binary, ' + number + ' is', 0, 50);
// 	Display the binary number.
	text(num, 0, 80);
//Label output
	text('In hexdedimal form, ' + number + ' is', 0, 100);
// 	Display the hexadecimal number.
	text(num2, 0, 120);
}