let listImg = document.querySelectorAll('.img__service');
let listTools = ['img/camera.png','img/ball.png','img/guitar.png','img/tvc.png'];

for (let i = 0; i < listImg.length; i++) {
    (function(index) {
        let isChanged = false;

        listImg[index].addEventListener('pointerdown', function() {
            let original = listImg[index].getAttribute('data-original-src');
            let currentSrc = listImg[index].src;

            if (isChanged) {
                listImg[index].style.opacity = '0';
                setTimeout(function() {
                    listImg[index].src = original;
                    listImg[index].style.opacity = '1';
                }, 600);
            } else {
                listImg[index].style.opacity = '0';
                setTimeout(function() {
                    listImg[index].src = listTools[index];
                    listImg[index].style.opacity = '1';
                }, 600);
            }

            isChanged = !isChanged;
            listImg[index].setAttribute('data-original-src', currentSrc);
        });
    })(i);
}
