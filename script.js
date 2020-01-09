"use strict"

/* Troll Game JavaScript File 1/9/2020

//Decision making process for a choose your own adventure type game. User will be prompted by dialog box, based on their response they can win or lose in various ways. */

//Set up an event listener for the button to trigger the start of the game
document.getElementById("button").addEventListener("click", trollBattle);

//Function to run the game 
function trollBattle(){
	//Initial prompt question for the user stored in a variable
	var action = window.prompt("You're walking through the forest, minding your business, and a troll suddently appears!\n\nDo you want to FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you want to BRIBE the troll?").toUpperCase();

	//Switch statement to handle the initial players choice
	switch(action){
		case "FIGHT":
			var smart = window.prompt("Are you a cunning warrior? (Yes or No)").toUpperCase();
			var strong = window.prompt("Are you stronger than a troll? (Yes or No)").toUpperCase();
			//IF statement analyzes user responces
			if(smart === "YES" || strong === "YES"){
				document.getElementById("result").innerHTML = "You can either be smarter or stronger than a troll to survive!<br/>You live another day!";
				//clear and bad messages from the page
				document.getElementById("death").innerHTML = "";
				//Play the winning audio file
				document.getElementById("win").play("win.mp3");
				//Change image background and title
				document.body.style.backgroundImage = "url('forest.jpg')";
				document.getElementById("title").innerHTML = "Safe travels ahead!";
			}
			else {
				document.getElementById("death").innerHTML = "oh dear...<br/> you have died!";
				//Clear and bad messages from the page
				document.getElementById("result").innerHTML = "";
				//Play the death audio file
				document.getElementById("die").play("death.mp3");
				document.body.style.backgroundImage = "url('woods.jpg')";
				document.getElementById("title").innerHTML = "TROLLS AHEAD! BEWARE!!!";
			}
			break;

		case "RUN":
			var fast = window.prompt("Are you fast? (Yes or No)").toUpperCase();
			if(fast === "YES"){
				document.getElementById("result").innerHTML = "Got Away Safely!";
				//clear and bad messages from the page
				document.getElementById("death").innerHTML = "";
				//Play the winning audio file
				document.getElementById("run").play("run.mp3");
				document.body.style.backgroundImage = "url('forest.jpg')";
				document.getElementById("title").innerHTML = "Safe travels ahead!";
			}
			else {
				document.getElementById("death").innerHTML = "Your too slow...<br/> You have DIED!";
				//clear and bad messages from the page
				document.getElementById("result").innerHTML = "";
				//Play the slow death audio file
				document.getElementById("slow").play("slow.mp3");
				document.body.style.backgroundImage = "url('woods.jpg')";
				document.getElementById("title").innerHTML = "TROLLS AHEAD! BEWARE!!!";
			}
			break;

		case "BRIBE":
		var money = window.prompt("Give the troll money to pass? (Yes or No)").toUpperCase();
			if(money === "YES"){
				var amount = window.prompt("How much money do you have?\n(Write in numeric value)");
				//convert the string from the prompt to integer
				amount = parseInt(amount);
			if(amount > 50){
				document.getElementById("result").innerHTML = "Great Job, the troll is happy!<br/>He lets you pass!";
				//clear and bad messages from the page
				document.getElementById("death").innerHTML = "";
				//Play the winning audio file
				document.getElementById("givecoin").play("givecoin.mp3");
				document.body.style.backgroundImage = "url('forest.jpg')";
				document.getElementById("title").innerHTML = "Safe travels ahead!";

			}
			else {
				document.getElementById("death").innerHTML = "Not enough money!?<br/>The troll has killed you!!";
				//clear and bad messages from the page
				document.getElementById("result").innerHTML = "";
				//Play the death audio file
				document.getElementById("coindrop").play("coindrop.mp3");
				document.body.style.backgroundImage = "url('woods.jpg')";
				document.getElementById("title").innerHTML = "TROLLS AHEAD! BEWARE!!!";
			}	

			}
			else {
				document.getElementById("death").innerHTML = "NO MONEY?!?<br/>The troll has killed you!!";
				//clear and bad messages from the page
				document.getElementById("result").innerHTML = "";
				//Play the death audio file
				document.getElementById("coindrop").play("coindrop.mp3");
				document.body.style.backgroundImage = "url('woods.jpg')";
				document.getElementById("title").innerHTML = "TROLLS AHEAD! BEWARE!!!";
			}
			break;

		default:
			window.alert("Please enter a valid choice!");
			trollBattle();
			break;
	}

}


































