// ### Test de liaison avec la page HTML
console.log('connecté !');
 
// ### Définition des variables
const modal = document.querySelector('.modal-container');
const btn = document.querySelector('.btn-success');
const icone = document.querySelector('.fa-times');
const code = document.querySelector('.code');

// ### Fonctions
function displayModal(){
	let hauteur = document.documentElement.scrollTop;
	if (hauteur > 400){
		modal.style.display = "flex";
	}
}

// ### Evénèments
window.addEventListener('scroll', displayModal);

btn.addEventListener('click', function(){
	code.style.display = "block";
	btn.style.display = "none";
});

icone.addEventListener('click', function(){
	modal.style.display = "none";
	window.removeEventListener('scroll', displayModal);
});
