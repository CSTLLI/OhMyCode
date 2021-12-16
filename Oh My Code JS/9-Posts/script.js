// ### Test de liaison avec la page HTML
console.log('connecté !');

// ### Définition des variables
const postsContainer = document.querySelector(".posts");
const posts = [
	{
	titre : "SEO, les bonnes pratiques", 
	hashtag : "#SEO", 
	extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
	}, 
	{
        titre : "Bien débuter en référencement payant", 
        hashtag : "#référencement", 
        extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

    }, 
    {
        titre : "Content Marketing, les bons arguments", 
        hashtag : "#contentmarketing", 
        extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

const Utilisateur = {
	nom : "Doe", 
	prenom : "John", 
	service : "Marketing"
}

// ### Fonctions

// ### Evénèments 
posts.forEach(item => {
	console.log(item);
	const article = `
						<div class="posts">
							<div class="post-titre"> ${item.titre}</div>
							<div class="post-extrait"> ${item.extrait}</div>
							<div class="post-hashtag"> ${item.hashtag}</div>
						</div>
					`
	console.log(article);
	
	postsContainer.innerHTML += article;
})

