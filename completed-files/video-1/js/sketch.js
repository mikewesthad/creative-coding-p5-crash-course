/*
	Video 1 - Testing your setup! Don't worry, you aren't supposed to understand
	the code just yet.
*/

const characters = [];
const numCharacters = 500;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	textSize(40);

	// Create our array of character objects
	for (let i = 0; i < numCharacters; i += 1) {
		const charObj = {
			letter: getRandomLetter(),
			x: random(0, width),
			y: random(0, height),
			speed: random(1.5, 2.5)
		};
		characters.push(charObj);
	}
}

function draw() {
	background(0, 10); // Slowly clear to black

	stroke(0);
	strokeWeight(1);
	fill(41, 255, 123);
	
	// Update all the characters
	for (let i = 0; i < numCharacters; i += 1) {
		characters[i].y += characters[i].speed;
		if (characters[i].y > height) {
			characters[i].y = 0;
		}
		characters[i].letter = getRandomLetter();
		text(characters[i].letter, characters[i].x, characters[i].y);
	}
}

// char(...) is a p5 function that converts a number to a string.  This uses 
// something called ASCII encoding to associate characters with numbers.  Check
// out this table: http://www.ascii-code.com/.  Char(...) takes a number in the 
// "dec" colum and turns it into "symbol" column
function getRandomLetter() {
	// Print a num that converts to a printable character
	var num = round(random(25, 255));
	return char(num);
}