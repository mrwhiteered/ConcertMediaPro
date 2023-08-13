let learnMore = document.getElementById('learnMore');
learnMore.addEventListener('mouseover', changeColor);
const btnLearn = document.querySelector('.text__link_about');

function changeColor() {
btnLearn.classList.toggle('white');
}