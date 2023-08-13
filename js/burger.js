const btn = document.querySelector('.burger');
const menu = document.querySelector('.burger_menu');

btn.addEventListener('click', function(){
	menu.classList.toggle('burger_menu_on');
	btn.classList.toggle('active');
})