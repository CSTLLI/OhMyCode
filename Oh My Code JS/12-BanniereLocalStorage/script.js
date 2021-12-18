// Test de liaison avec la page HTML
console.log('connecté !');


// ### Définition des variables
const btnSuccess = document.querySelector('.btn-success');
const cookies = document.querySelector('.cookies');

let valeurCle = localStorage.getItem('banniere');

// ### Test avec la console
console.log(btnSuccess);
console.log(cookies);

//Fonctions
function check(){
	if (valeurCle){
		cookies.remove();
	}else{
		console.log("aucun stockage");
	}
};

check();

// ### Evénèments
btnSuccess.addEventListener('click', function(){
	cookies.style.display = "none";
	localStorage.setItem('banniere', 'oui');
});