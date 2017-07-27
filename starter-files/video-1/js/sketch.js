/*
	Video 1 - Testing your setup!
*/

let angle = 0;

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
	createCanvas(windowWidth, windowHeight);

    angleMode(DEGREES);
	background(0);
	textAlign(CENTER, CENTER);
	textSize(200);
	fill(255, 167, 15);
	noStroke();
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
    angle += 0.75;

	background(0, 25);
	push();
		translate(mouseX, mouseY);
		rotate(angle)
		text("I'm working", 0, 0);
	pop();
}