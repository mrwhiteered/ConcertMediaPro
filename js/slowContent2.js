function resetStyles(elem) {
    elem.style.opacity = '0';
    elem.style.transform = 'translateX(200px)';
}
let screen = window.innerWidth;
let removeFadeIn = document.querySelectorAll('.screenMedia');

if (screen<500){
    
    removeFadeIn.forEach((mun) =>{
mun.classList.remove('fade-in');
    });
}

function fadeInOnScroll() {
    const fadeInSectionList = document.querySelectorAll('.fade-in');

    fadeInSectionList.forEach((fadeInSection) => {
        // const fadeInSectionContent = fadeInSection.querySelector('.fade-in-content');
        const distanceFromTop = fadeInSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        let speedShow = parseFloat(fadeInSection.getAttribute('data-speed'));
            if(screen<870 && screen>500){
                
                if (distanceFromTop - windowHeight + 0 <= 0) {
                    fadeInSection.style.opacity = '1';
                    fadeInSection.style.transform = 'translateX(0)';
                    fadeInSection.style.transition = `opacity ${speedShow}s ease-in-out, transform ${speedShow}s ease-in-out`;
                }
                 else { 
                    resetStyles(fadeInSection);
                 }
            } else if(screen<=500) {
               
                if (distanceFromTop - windowHeight + 30 <= 0) {
                    fadeInSection.style.opacity = '1';
                    fadeInSection.style.transform = 'translateX(0)';
                    fadeInSection.style.transition = `opacity ${speedShow}s ease-in-out, transform ${speedShow}s ease-in-out`;
                }
                 else { 
                    resetStyles(fadeInSection);
                 }
            } else {
               
                if (distanceFromTop - windowHeight + 100 <= 0) {
                    fadeInSection.style.opacity = '1';
                    fadeInSection.style.transform = 'translateX(0)';
                    fadeInSection.style.transition = `opacity ${speedShow}s ease-in-out, transform ${speedShow}s ease-in-out`;
                }
                 else { 
                    resetStyles(fadeInSection);
                 }
            }
       
    });
}

window.addEventListener('scroll', fadeInOnScroll);