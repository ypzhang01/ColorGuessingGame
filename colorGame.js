var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	resetBtn.textContent = "New Colors";
	document.querySelector(".head").style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {		
		squares[i].style.backgroundColor = colors[i];		
		squares[i].style.display = 'block';		
	}
	resetBtn.textContent = "New Colors";
	document.querySelector(".head").style.backgroundColor = "steelblue";
});

resetBtn.addEventListener("click", function(){
	//generate ramdom colors
	colors = generateRandomColors(numSquares);
	//pick a new ramdom color
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	document.querySelector(".head").style.backgroundColor = "steelblue";
	message.textContent = "";
	this.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	//add initail colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			message.textContent = "Correct!";
			resetBtn.textContent = "Play again?";
			document.querySelector(".head").style.backgroundColor = clickedColor;
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = pickedColor;
			}
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try again";
		}
	});
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}