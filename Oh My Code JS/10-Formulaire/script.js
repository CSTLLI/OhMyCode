// ### Test de liaison avec la page HTML
console.log('connecté !');

// ### Définition des variables
const title = document.getElementById('titre');
const form = document.getElementById('formulaire');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

const msgError = document.querySelectorAll('.error')


// ### Fonctions

// ### Evénèments 
form.addEventListener('submit', function(e){
	// Demander de ne pas raffraichir la page
	e.preventDefault();
	// Désactiver tous les messages d'erreurs
	msgError.forEach(error =>{
		error.classList.add('invisible');
	})
	
	let valid = 1;

	// Récupération des valeurs dans tous les inputs
	prenomValue = prenom.value.trim();
	nomValue = nom.value.trim();
	emailValue = email.value.trim();
	messageValue = message.value.trim();

	if (prenomValue.length < 2 || prenomValue.length > 10)
	{
		console.log('error prenom');
		prenom.nextElementSibling.classList.remove('invisible');
		valid = 0;
	}
	if(nomValue.length < 3 || nomValue.length > 15)
	{
		console.log('error nom');
		nom.nextElementSibling.classList.remove('invisible');
		valid = 0;
	}
	if(messageValue.length < 10 || messageValue.length > 100)
	{
		console.log('error message');
		message.nextElementSibling.classList.remove('invisible');
		valid = 0;
	}
	if(valid === 1)
	{
		title.innerText = "Votre message a été envoyé avec succès !";
	}
});

