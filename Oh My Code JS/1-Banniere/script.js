console.log('connecté !');

const btnSuccess = document.querySelector('.btn-success');
const cookies = document.querySelector('.cookies');

console.log(btnSuccess);
console.log(cookies);

btnSuccess.addEventListener('click', function(){
	cookies.style.opacity = "0";
});