// ### Test de liaison avec la page HTML
console.log('connecté !');

// ### Définition des variables
const form = document.getElementById('form');
const todo = document.getElementById('todo');
const listItems = document.querySelector('.list-items');



// ### Test avec la console

// ### Fonctions

// ### Evénèments 
form.addEventListener('submit', function(e){
	e.preventDefault();
	
	todoValue = todo.value;
	console.log(todoValue);

	let item = `
				<div class="item">
					<p>${todoValue}</p>
					<button class="btn-delete">
						<i class="fas fa-trash-alt"></i>
					</button>
					<button class="btn-archive">
						<i class="fas fa-check-circle"></i>
					</button>
				</div>
				`
	listItems.innerHTML += item;
	
	const btnDelete = document.querySelectorAll('.btn-delete');
	const btnArchive = document.querySelectorAll('.btn-archive');
	
	btnDelete.forEach(i => {
		i.addEventListener('click', function(){
			console.log("remove cliqué");
			i.parentElement.remove();
		});
	});

	btnArchive.forEach(i => {
		i.addEventListener('click', function(){
			i.parentElement.firstElementChild.classList.toggle('line');
		});
	});

	form.reset();
});

