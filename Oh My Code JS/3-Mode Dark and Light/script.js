// ### Test de liaison avec la page HTML
console.log('connecté !');

// ### Définition des variables
const body = document.querySelector('.body');
const switchBox = document.querySelector('.switch');
const btn = document.querySelector('.btn');
const icone = document.querySelector('i');
const container = document.querySelector('.container');
const titre = document.querySelector('.title');

const btnPlus = document.querySelector('.btn-plus');
const btnMoins = document.querySelector('.btn-moins');

// ### Evénèments 
switchBox.addEventListener('click', function(){
	btn.classList.toggle('btn-change');

	icone.classList.toggle('icone-change');
	icone.classList.toggle('fa-sun');

	switchBox.classList.toggle('switch-change');

	btnPlus.classList.toggle('btn-def-change');
	btnMoins.classList.toggle('btn-def-change');

	container.classList.toggle('container-change');

	if (titre.innerText === "DARK MODE"){
		titre.innerText = "LIGHT MODE";
	}else{
		titre.innerText = "DARK MODE";
	}
})

let fontSize = 14;

btnPlus.addEventListener('click', function(){
	fontSize++;
	body.style.fontSize = fontSize + "px";
})

btnMoins.addEventListener('click', function(){
	fontSize--;
	body.style.fontSize = fontSize + "px";
})