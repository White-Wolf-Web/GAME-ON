/*****  DOM *****/
const firstName = document.getElementById("first");                  // création d'une constante qui est liée à first (prénom)
const lastName = document.getElementById("last");                    // création d'une constante qui est liée à last (nom de famille)
const email = document.getElementById("email");                      // création d'une constante qui est liée à email
const birthdate = document.getElementById("birthdate");              // création d'une constante qui est liée à birthdate ( date de naissance)
const quantity = document.getElementById("quantity");                // création d'une constante qui est liée à quantity  ( quantité)
const locations = document.querySelectorAll("input[name=location]"); // création d'une constante qui est a la creation d'un tableau pour les radios
const checkbox1 = document.getElementById("checkbox1");              // création d'une constante qui est liée à checkBob 1
const btnSubmit = document.getElementById("btnSubmit");              // création d'une constante qui est liée à btnSubmit (bouton de submission)
const form = document.getElementById("form");                        // création d'une constante qui est liée au form du 1er Modal
const thanksModal = document.getElementById("thanksModal");          // création d'une constante qui est liée au second Modal

/***** Input PlaceHolder *****/
firstName.placeholder = "Prenom";                  // Ajout d'un placeHolder pour l'input prénom
lastName.placeholder = "Nom";                      // Ajout d'un placeHolder pour l'input nom
email.placeholder = "Email";                       // Ajout d'un placeHolder pour l'input Email
quantity.placeholder = "Un nombre entre 0 et 99";  // Ajout d'un placeHolder pour l'input Quantity

/***** Input Error *****/
const firstNameErr = document.getElementById("firstNameErr");  // création d'une constante ERROR qui est liée à first (prénom)
const lastNameErr = document.getElementById("lastNameErr");    // création d'une constante ERROR qui est liée à last (nom)
const emailErr = document.getElementById("emailErr");          // création d'une constante ERROR qui est liée à email
const birthdateErr = document.getElementById("birthdateErr");  // création d'une constante ERROR qui est liée à birthdate (date de naissance)
const quantityErr = document.getElementById("quantityErr");    // création d'une constante ERROR qui est liée à quantity (nombre de tournois éffectués)
const locationsErr = document.getElementById("locationsErr");  // création d'une constante ERROR qui est liée à radio
const conditionErr = document.getElementById("conditionErr");  // création d'une constante ERROR qui est liée au condition Lu et approuvé

/*****  radio  *****/
const loc1 = locations[0]; // Permet de cibler directement le radio choisi New York
const loc2 = locations[1]; // Permet de cibler directement le radio choisi SanFrancisco
const loc3 = locations[2]; // Permet de cibler directement le radio choisi Seattle
const loc4 = locations[3]; // Permet de cibler directement le radio choisi Chicago
const loc5 = locations[4]; // Permet de cibler directement le radio choisi Boston 
const loc6 = locations[5]; // Permet de cibler directement le radio choisi Portland

/*****  Listen input addEventListener *****/
firstName.addEventListener("input", function () { // création d'un addEventListener pour l'input firstName  j'ecoute pour voir si il repond a ma demande
	validateFirstName();                            // c'est la fonction qui sera exécuté lorsque on ecrira dans l'input (suite a notre ecoute)
});
lastName.addEventListener("input", function () {  // création d'un addEventListener pour l'input lastName j'ecoute pour voir si il repond a ma demande
	validateLastName();                             // c'est la fonction qui sera exécuté lorsque on ecrira dans l'input (suite a notre ecoute)
});
email.addEventListener("input", function () {     // création d'un addEventListener pour l'input email  j'ecoute pour voir si il repond a ma demande
	validateEmail();                                // c'est la fonction qui sera exécuté lorsque on ecrira dans l'input (suite a notre ecoute)
});
birthdate.addEventListener("input", function () { // création d'un addEventListener pour l'input birthdate  j'ecoute pour voir si il repond a ma demande
	validateBirthdate();                            // c'est la fonction qui sera exécuté lorsque on ecrira dans l'input (suite a notre ecoute)
});
quantity.addEventListener("input", function () {  // création d'un addEventListener pour l'input quantity  j'ecoute pour voir si il repond a ma demande
	validateQuantity();                             // c'est la fonction qui sera exécuté lorsque on ecrira dans l'input (suite a notre ecoute)
});
loc1.addEventListener("change", function () {     // création d'un addEventListener pour la radio 1 j'ecoute pour voir si il repond a ma demande
	locationsErr.textContent = "";                  // Le message d'avertissement s'efface des que l'on clique sur le bouton radio
});
loc2.addEventListener("change", function () {     
	locationsErr.textContent = "";
});
loc3.addEventListener("change", function () {
	locationsErr.textContent = "";
});
loc4.addEventListener("change", function () {
	locationsErr.textContent = "";
});
loc5.addEventListener("change", function () {
	locationsErr.textContent = "";
});
loc5.addEventListener("change", function () {
	locationsErr.textContent = "";
});
loc6.addEventListener("change", function () {
	locationsErr.textContent = "";
});
checkbox1.addEventListener("change", function () {      // création d'un addEventListener pour la CheckBox "lu et approuvé" j'ecoute pour voir si il repond a ma demande
	readAndApprove();                                     // c'est la fonction qui sera exécuté lorsque on ecrira dans l'input (suite a notre ecoute)
});
btnSubmit.addEventListener("click", function (event) {  // création d'un addEventListener pour le bouton submit j'ecoute pour voir s'il repond a ma demande
	event.preventDefault();                               // Je bloque tant que tout n 'est pas accepté
	validate();                                           // c'est la fonction qui sera exécuté lorsque on ecrira dans l'input (suite a notre ecoute)
});

// REGEX
const alphaRegex = /^[a-zA-Zéêëèîïâäàçù ,.'-]{2,70}$/;                                   // regex (expression rationnelle) pour les lettres de 0 a 70 caractères
const emailRegex = /^([a-zA-Z0-9.-_--]+[@]{1}[a-zA-Z0-9.-_--]+[.]{1}[a-z]{2,3}){0,90}$/; // regex (expression rationnelle) alphanumerique + @ et .  pour le mail
const numericRegex = /^(0|[1-9][0-9]*)$/;                                                // regex (expression rationnelle) pour les nombres

/* *********************** VALIDATION OF INPUTS ***************************/
/***** Validate First Name *****/
let validateFirstName = function () {                          	                 // création de la fonction que je vais ecouter pour valider qu'il n'y a pas "d'erreur de frappe"
	let testFirstName = alphaRegex.test(firstName.value);                        // je teste avec le regex ce qu'ecrit le client voir qu'il n'y est pas d'erreur
	if (testFirstName == false) {     		                                     // si mon test ne passe pas
		firstNameErr.textContent = "Veuillez entrer 2 caractères ou plus svp 🙏";// alors on ecrit un message d'erreur dessous "bla bla bla"
		firstNameErr.classList.add("inputErr");                                  // Me permet d'afficher le message d'erreur en rouge petite taille .....
		firstName.classList.add("inputErrBorder");                               // me permet de creer une bordure rouge 	                                                
	} else {
		firstNameErr.textContent = "";                                           // puisqu'il n 'y a pas erreur on n'ecris pas de message erreur!
		firstName.classList.remove("inputErrBorder");                            // puisqu'il n 'y a pas erreur je retire la bordure colorée
	}
	return testFirstName;
};

/***** Validate Last Name *****/
let validateLastName = function () {
	let testLastName = alphaRegex.test(lastName.value); 
	if (testLastName == false) {
		lastNameErr.textContent = "Veuillez saisir votre nom svp 🙏"; 
		lastNameErr.classList.add("inputErr"); 
		lastName.classList.add("inputErrBorder");
	} else {
		lastNameErr.textContent = ""; 
		lastName.classList.remove("inputErrBorder", "inputEmptyBorder");
	}
	return testLastName;
};

/***** Validate Email *****/
let validateEmail = function () {
	let testEmail = emailRegex.test(email.value); 
	if (testEmail == false) {
		emailErr.textContent = "Veuillez saisir votre Email svp 🙏"; 
		emailErr.classList.add("inputErr");
		email.classList.add("inputErrBorder");
	} else {
		emailErr.textContent = ""; 
		email.classList.remove("inputErrBorder", "inputEmptyBorder");
	}
	return testEmail;
};

/***** Validate Birthdate *****/
let validateBirthdate = function () {
	if (birthdate.value == "") {
		birthdateErr.textContent = "Veuillez saisir votre date de naissance svp 🙏"; 
		birthdateErr.classList.add("inputErr");
		birthdate.classList.add("inputErrBorder");
	} else {
		birthdateErr.textContent = "";
		birthdate.classList.remove("inputErrBorder", "inputEmptyBorder");
	}
	return birthdate.value !=="";
};

/***** Validate Quantity *****/
let validateQuantity = function () {
	let testQuantity = numericRegex.test(quantity.value); 
	if (testQuantity == false) {
		quantityErr.textContent = "Veuillez saisir un chiffre svp 🙏"; 
		quantityErr.classList.add("inputErr");
		quantity.classList.add("inputErrBorder");
	} else {
		quantityErr.textContent = ""; 
		quantity.classList.remove("inputErrBorder", "inputEmptyBorder");
	}
	return testQuantity;
};

/***** Radios about the next tournament *****/
function tournamentLocation() {
	if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
		locationsErr.textContent = "Vous devez choisir une option svp 🙏";
		locationsErr.classList.add("inputErr");
		return false;
	} else {
		locationsErr.textContent = "";
		return true;
	}
}

/***** CheckBox accept and approve *****/
function readAndApprove() {
	if (!checkbox1.checked) {
		conditionErr.textContent = "Vous devez vérifier que vous acceptez les termes et conditions svp 🙏";
		conditionErr.classList.add("inputErr");
		return false;
	} else {
		conditionErr.textContent = "";
		return true;
	}
}

/***** Final validation *****/
function thanksModalFunc() {
	form.style.display = "none";
	thanksModal.style.display = "block";
}

// Si tous les inputs sont validés alors le Modal sera accepté et se retirera 
function validate() {                            
	(validateFirstName() && validateLastName() && validateEmail() && validateBirthdate() && validateQuantity() && tournamentLocation() && readAndApprove()) && thanksModalFunc();
}
