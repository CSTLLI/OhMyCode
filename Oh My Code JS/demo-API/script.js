// ### Test de liaison avec la page HTML
console.log('connecté !');

const item = document.querySelector('.banniere-titre');

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then(response => response.json())
// 	.then(data => console.log(data))

async function enAttente(){
	try{
	const reponseJSON = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const reponseJS = await reponseJSON.json();

	console.log(reponseJS);

	item.innerHTML = `<h1>${reponseJS.title}</h1>`;
	}
	catch(error){
		console.log(error);
	}
}

enAttente();
