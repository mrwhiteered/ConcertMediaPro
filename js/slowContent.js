const fadeInSection = document.querySelector('.fade-in-section');
const fadeInSectionContent = document.querySelector('.fade-in-content');

function fadeInOnScroll() {
    const distanceFromTop = fadeInSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (distanceFromTop - windowHeight <= 0) {
        fadeInSectionContent.style.opacity = '1';
        window.removeEventListener('scroll', fadeInOnScroll);
    }
}

window.addEventListener('scroll', fadeInOnScroll);