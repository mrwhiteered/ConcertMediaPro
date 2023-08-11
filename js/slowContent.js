function resetStyles(elem) {
    elem.style.opacity = '0';
    elem.style.transform = 'translateY(200px)';
}

function fadeInOnScroll() {
    const fadeInSectionList = document.querySelectorAll('.fade-in');

    fadeInSectionList.forEach((fadeInSection) => {
        // const fadeInSectionContent = fadeInSection.querySelector('.fade-in-content');
        const distanceFromTop = fadeInSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        let speedShow = parseFloat(fadeInSection.getAttribute('data-speed'));
            
        if (distanceFromTop - windowHeight + 200 <= 0) {
            fadeInSection.style.opacity = '1';
            fadeInSection.style.transform = 'translateY(0)';
            fadeInSection.style.transition = `opacity ${speedShow}s ease-in-out, transform ${speedShow}s ease-in-out`;
        }
         else { 
            resetStyles(fadeInSection);
         }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
