/*
	Links

	- RGB picker: https://codepen.io/mikewesthad/pen/prwReJ
	- p5 Reference: http://p5js.org/reference/. See the structure, shape and
	  color sections.
	
	Challenge:

	- Try combining two or more different colored shapes to create a pattern,
	  e.g. how would you create a bullseye? Bonus points if you use something
	  new from the p5 reference page.
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
    // Create a drawing surface
    createCanvas(800, 600);

	// Draw a black background using the RGB color model
	background(61, 20, 99);

	// // Set the style for drawing
	// fill(255, 255, 255);
	// stroke(255, 200, 0);
	// strokeWeight(10);

	// // Draw some shapes in that style
	// rect(250, 150, 100, 200); // x, y, w, h
	// ellipse(300, 100, 150); // x, y, diameter

	// // Change the drawing style
	// stroke(243, 145, 255);
	// strokeWeight(30);
	// noFill();
	// // You can also use noStroke() to turn off the stroke

	// // Draw some shapes in that new style
	// rect(450, 150, 100, 200); // x, y, w, h
	// ellipse(500, 100, 150); // x, y, diameter
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
	// Draw a line from the center of the screen to mouse position
    stroke(255, 255, 255, 50);
    strokeWeight(10);
    // line(pmouseX, pmouseY, mouseX, mouseY);
    line(width / 2, height / 2, mouseX, mouseY);

	// Draw a circle at the mouse position
    // fill(255, 48, 244);
    // stroke(255, 255, 255);
	// strokeWeight(1);
	// ellipse(mouseX, mouseY, 40, 40);

	// Bullseye!
	// noStroke();
    // fill(255, 17, 231);
	// ellipse(mouseX, mouseY, 50, 50);
    // fill(255, 255, 255);
	// ellipse(mouseX, mouseY, 40, 40);
    // fill(255, 17, 231);
	// ellipse(mouseX, mouseY, 30, 30);
    // fill(255, 255, 255);
	// ellipse(mouseX, mouseY, 20, 20);
    // fill(255, 17, 231);
	// ellipse(mouseX, mouseY, 10, 10);
}
