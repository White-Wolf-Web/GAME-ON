//DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");  // création d'une constante qui est liée au bouton qui va plus bas enclenché l'arrivée du modal
const modalbg = document.querySelector(".bground");        // création d'une constante qui va "concretisé (display: block)" du modal
const modalBtnClose = document.querySelectorAll(".close"); // création d'une constante qui lie la X pour fermer le modal
const thanksBtn = document.getElementById("thanksBtn");    // création d'une constante qui est liée au bouton "fermer" du second modal

// Modal Opening
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));    // création d'un addEventListener pour quand je clique sur le bouton  j'enclenche la fonction "launchModal"

function launchModal() {                                                  // Fonction launchModal qui va faire apparaitre le modal
	modalbg.style.display = "block";                                      // rajout de la class "display:block"
}

// Modal Closing
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));// création d'un addEventListener pour quand je clique sur la X j'enclenche la fonction "closeModal"
thanksBtn.addEventListener("click", closeModal);

function closeModal() {                                                   // Fonction closeModal qui va faire disparaitre le modal
	modalbg.style.display = "none";                                       // rajout de la class "display:none"
}


// window.location.reload();