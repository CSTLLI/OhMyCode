// ### Test de liaison avec la page HTML
console.log('connecté !');

// ### Définition des variables

const icone = document.querySelector('.navbar-mobile i');
const modal = document.querySelector('.modal');

// ### Evénèments 
icone.addEventListener('click', function(){
	modal.classList.toggle('change-modal');
	icone.classList.toggle('fa-times');
});