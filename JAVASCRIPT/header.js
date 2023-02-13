const burger = document.getElementById("burger");   // creation d'un ID Burger qui me permet Aria + association avec le burger
burger.addEventListener("click", editNav);          // Creation d'une ecoute du click

function editNav() {                                // La fonction editNav va enclencher un menu responsive

	let x = document.getElementById("myTopnav");

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
editNav();
