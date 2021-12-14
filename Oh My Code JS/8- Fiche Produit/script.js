// ### Test de liaison avec la page HTML
console.log('connecté !');

// ### Définition des variables
const vignettes = document.querySelectorAll('.small');
const fullImg = document.getElementById('full');
const btn = document.querySelector('.btn-add');
const panier = document.querySelector('.panier-container');

let NbPanier = 0;

// ### Fonctions
function CountPanier() {
	NbPanier +=1;
	if (NbPanier <= 1){
	panier.innerText = "Vous avez " + NbPanier + " produit dans votre panier."
	}else{
		panier.innerText = "Vous avez " + NbPanier + " produits dans votre panier."
	}
}

// ### Evénèments 
vignettes.forEach((item)=>{
	item.addEventListener('click', function(){
		let imgSource = item.getAttribute('src');
		fullImg.setAttribute('src', imgSource);
	})
});

btn.addEventListener('click', CountPanier);
