// Test de liaison avec la page HTML
console.log('connecté !');


// ### Définition des variables
const btnSuccess = document.querySelector('.btn-success');
const cookies = document.querySelector('.cookies');

// ### Test avec la console
console.log(btnSuccess);
console.log(cookies);

// ### Evénèments 
btnSuccess.addEventListener('click', function(){
	cookies.style.bottom = "-145px";
});