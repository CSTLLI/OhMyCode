// ### Test de liaison avec la page HTML
console.log('connecté !');

// ### Définition des variables
const questions = document.querySelectorAll('.question');

// ### Evénèments 
questions.forEach((item)=>{
	item.addEventListener('click', function(){
		const next = item.nextElementSibling;
		next.classList.toggle('visible');

		icone = item.lastElementChild;
		icone.classList.toggle('fa-chevron-up');
	})
})