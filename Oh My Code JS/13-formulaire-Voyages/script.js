// ### Test de liaison avec la page HTML
console.log('connecté !');

// ### Formulaire
const form = document.getElementById('form');

const pays = document.getElementById('pays');
const start = document.getElementById('start');
const end = document.getElementById('end');
const listeResultats = document.querySelector('.liste-resultats');

const voyages = [
	{
		pays : "Hawai", 
		prix : 1790, 
		voyageurs : 4
	},
	{
		pays : "Bahamas", 
		prix : 2290, 
		voyageurs : 4
	},
	{
		pays : "Tahiti", 
		prix : 1490, 
		voyageurs : 3
	},
	{
		pays : "Tahiti", 
		prix : 1790, 
		voyageurs : 4
	}, 
	{
		pays : "Maldives", 
		prix : 1390, 
		voyageurs : 4
	}, 
]

function displayDetails(){
	if (localStorage.getItem('details') === null){
		return;		
	}else{
		const choixObjet = JSON.parse(localStorage.getItem('details'));

		pays.value = choixObjet.pays;
		start.value = choixObjet.start;
		end.value = choixObjet.end;
		
		const resultats = voyages.filter((voyage) =>
						voyage.pays === pays.value);
		
		if (resultats.length == 0){
			const item =
			`
		<div class="item">
			<p class="item-pays">
				Oups...
			</p>
			<p>
				Aucune offre est disponible pour cette destination.
			</p>
		</div>
		`
			listeResultats.innerHTML = item;
		}else{
			resultats.forEach(resultat =>{
					const item = 	
						`
						<div class="item">
							<p class="item-pays">
								${resultat.pays}
							</p>
							<p>
								Offre pour ${resultat.voyageurs} personnes
							</p>
							<p>
								Prix vol inclus ${resultat.prix}$
							</p>
							<button>
								Go!
							</button>
						</div>
						`
					listeResultats.innerHTML += item;
			})
		};
	}
}

displayDetails();

form.addEventListener('submit', function(e){
	e.preventDefault();

	const choix = {
		pays : pays.value, 
		start : start.value,
		end : end.value
	}

	const choixString = JSON.stringify(choix);
	localStorage.setItem('details', choixString);

	// Raffraichissement de la page
	window.location.href = window.location.href;
});