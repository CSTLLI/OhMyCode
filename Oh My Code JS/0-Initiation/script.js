//### Définitiond des variables
let titre = document.getElementById('titre');
let compteur = 0;

const replayLoop = document.getElementById('replay');
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');


console.log("compteur au démarrage :", compteur);

console.log(btnRed, "bouton rouge");
console.log(btnBlue, "bouton bleu");


//### Fonction Incrementation 
function increment(){
	compteur += 1;
	console.log("cliqué ! compteur : ", compteur);
	titre.innerText= compteur; //Change le titre en compteur
}


//### Fonction Chronomètre 
setTimeout(function(){
	//Suppression des cercles après 10 sec
	btnRed.remove();
	btnBlue.remove();
}, 10000);


//### Reload la page après le click sur Rejouer
replayLoop.addEventListener('click', function(){
	location.reload();
}); 


//### Incrementation après un clique sur l'un des cercles
btnRed.addEventListener('click', function(){ increment();});
btnBlue.addEventListener('click', function(){ increment();});
