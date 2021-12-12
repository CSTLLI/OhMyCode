console.log('connecté !');

const btn = document.querySelector('.btn');
const ctn = document.querySelector('.container-notifications');

btn.addEventListener('click', function(){
	const notification = document.createElement('div');

	notification.classList.add('toast');
	notification.innerText = "Votre fichier est bien enregistré !"
	console.log(notification);

	ctn.appendChild(notification);
	
	setTimeout(function(){
	notification.remove();
	}, 2000);
})



