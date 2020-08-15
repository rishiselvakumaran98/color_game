var displayed_colors = []
var squares = document.querySelectorAll(".square");
var status_message = document.getElementById("message");
var display_user_color = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var number_squares = 0;
var random_num =0;
var chosen_color ="blue";
var player_points = 0;
var n = 0;


for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy"){
			resetModule_3_sq()
		} else if (this.textContent === "Medium"){
			resetModule_6_sq();
		} else{
			resetModule_9_sq();
		}
		status_message.textContent = "";
		random_num = Number(Math.floor(Math.random()*number_squares));
		chosen_color = displayed_colors[random_num];
		display_user_color.textContent = chosen_color;
		h1.textContent = "Welcome to the RGB Game!"
		player_points = 0;
		n = 0;
		document.getElementById("player_points").innerHTML=player_points;
		document.getElementById("num_rounds").innerHTML=5;
	});
}

/////////////turnery Operator Demo //////////////////

// if (this.textContent === "Easy"){
// 	numSquares = 3;
// }else{
// 	numSquares = 6;
// }

// // Same as :

// this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

///////////////////////////////////////////////////////////////////////

new_page();
/////////////////////////// New page reload ///////////////////////
function new_page(){
	resetModule_6_sq();
	random_num = Number(Math.floor(Math.random()*6));
	chosen_color = displayed_colors[random_num];
	display_user_color.textContent = chosen_color;
}
////////////////////////////////////////////////////////////////////

function resetModule_3_sq(){
	displayed_colors = [];
	number_squares=3;
	for(var i = 0; i < squares.length; i++){
		var pickedColor = randomColor();
		squares[i].style.display="initial";
		if(i > 2){
			squares[i].style.display="none";
		}else{
			squares[i].style.backgroundColor = pickedColor;
			displayed_colors.push(pickedColor);
		}
	}
}

function all_squares(color){
	for(var i = 0; i < squares.length; i++){
		if (squares[i].style.display !== "block"){
			squares[i].style.backgroundColor = color;
		}
	}
}


function resetModule_6_sq(){
	displayed_colors = [];
	number_squares=6;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.display="initial";
		if(i > 5){
			squares[i].style.display="none";
		}else{
			var pickedColor = randomColor();
			squares[i].style.backgroundColor = pickedColor;
			displayed_colors.push(pickedColor);
		}
	}
}

function resetModule_9_sq(){
	displayed_colors = [];
	number_squares=9;
	for(var i = 0; i < squares.length; i++){
		var pickedColor = randomColor();
		squares[i].style.display="initial";
		squares[i].style.backgroundColor = pickedColor;//rand_color[i];
		displayed_colors.push(pickedColor);
	}
}


/////////// Reset button functions below //////////////////////////////
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",function(){
	// reset the displayed colors array to default 6 squares
	// generate all new colors
	// pick a new random color from array
	// Display the current points to the player and update it synchronously.
	resetButton.textContent = "New Colors"
	document.getElementById("player_points").innerHTML=player_points;
	document.getElementById("num_rounds").innerHTML=5-n;

	if (modeButtons[0].classList.contains("selected")){
		resetModule_3_sq();
		status_message.textContent = "";
		random_num = Number(Math.floor(Math.random()*3));

		chosen_color = displayed_colors[random_num];

		display_user_color.textContent = chosen_color;

		//h1.textContent = "Welcome to the RGB Game!"
	} else if (modeButtons[1].classList.contains("selected")){
		resetModule_6_sq();
		status_message.textContent = "";
		random_num = Number(Math.floor(Math.random()*6));

		chosen_color = displayed_colors[random_num];

		display_user_color.textContent = chosen_color;

		//h1.textContent = "Welcome to the RGB Game!"
	} else{
		resetModule_9_sq();
		status_message.textContent = "";
		random_num = Number(Math.floor(Math.random()*9));

		chosen_color = displayed_colors[random_num];

		display_user_color.textContent = chosen_color;

		
	}
	if(n===5){
		h1.textContent = "Welcome to the RGB Game!"
		player_points = 0;
		n = 0;
		document.getElementById("player_points").innerHTML=player_points;
		document.getElementById("num_rounds").innerHTML=5;
	}
});

//////////////////////////////////////////////////////////////////////

// for loop to go through event listener and display correct if player wins
// Player can play the game for 5 times and after finishing the game, rests it by clicking on 
// one of the other colors
// Game gets auto rest!
document.getElementById("player_points").innerHTML=player_points;
document.getElementById("num_rounds").innerHTML=5-n;
for(var i =0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		if(n <= 5){
			document.getElementById("num_rounds").innerHTML=5-n;
			console.log(n);
			if (chosen_color === this.style.backgroundColor){
				status_message.textContent = "Correct!";
				h1.textContent = "Good Job!"
				h1.style.backgroundColor = chosen_color;
				all_squares(this.style.backgroundColor);
				// h1.textContent = "Correct!"
				player_points += 5;
				n += 1;
				document.getElementById("player_points").innerHTML= player_points;
				document.getElementById("num_rounds").innerHTML= 5-n;
				setTimeout(function () {document.getElementById("reset").click();}, 1000);
			} else{
				status_message.textContent = "Try Again! -1 Point";
				if(player_points > 0){
					player_points -= 1;
					document.getElementById("player_points").innerHTML=player_points;
				}
				this.style.backgroundColor = "#232323";
			}
		}else{
			console.log(n);
			resetButton.textContent = "Play Again?"
			h1.textContent = "Congrats! You finished the Game!"
			all_squares(this.style.backgroundColor);
			document.getElementById("player_points").innerHTML=player_points;
			document.getElementById("num_rounds").innerHTML=0;
		}
	});
}

// Initial Simple Loop
// for(var i =0; i < squares.length; i++){

// 	squares[i].addEventListener("click", function(){
// 		if (chosen_color === this.style.backgroundColor){
// 			status_message.textContent = "Correct!";
// 			h1.style.backgroundColor = chosen_color;
// 			all_squares(this.style.backgroundColor);

// 			resetButton.textContent = "Play Again?"
// 			h1.textContent = "You have won!"
// 		} else{
// 			status_message.textContent = "Try Again!";
// 			this.style.backgroundColor = "#232323";
// 		}
// 	});
// }

// Function to generate Random RGB values for color game
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", "+ g + ", " + b + ")";
}
