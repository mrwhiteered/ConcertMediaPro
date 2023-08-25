let listWorks = document.getElementById('list__works');
let mainVideo = document.getElementById('videoPlayer');

let playList = ['intro.mov', 'myVideo1.mp4', 'intro.mov', 'intro.mov'];
let playListLength = playList.length;
let previousLiElement = null; // Для хранения предыдущего элемента <li>

let videoWrap = document.getElementById('video__wrap'); // Получаем контейнер для видео

let preloadVideo = new Audio(); // Создаем новый элемент Audio (который также загружает видео)
preloadVideo.autoplay = false; // Отключаем автовоспроизведение

function preloadNextVideo(videoIndex) {
    let nextVideoIndex = (videoIndex + 1) % playList.length; // Индекс следующего видео
    let nextVideoPath = `video/works/${playList[nextVideoIndex]}`;
    
    preloadVideo.src = nextVideoPath; // Загружаем следующее видео
}

let number =0;
let screenSmartfone = window.innerWidth;
console.log(screenSmartfone);
for (let i = 0; i < playListLength; i++) {



    let liElem = document.createElement('li');
    liElem.setAttribute('id', 'video_' + i);
    if (screenSmartfone<=460){
        liElem.setAttribute('class', 'works__video_item fade-in');
    }else {
        liElem.setAttribute('class', 'works__video_item');
    }
   
    
    let videoElement = document.createElement('video');
    videoElement.setAttribute("id", 'video' + i);
    videoElement.setAttribute("controls", "");
    videoElement.setAttribute("muted", "muted"); 
    videoElement.setAttribute("loop", "");
    videoElement.muted = true;

    let sourceElement = document.createElement("source");
    let sourcePath = "./video/works/" + playList[i];
    sourceElement.src = sourcePath;
    sourceElement.setAttribute("type", "video/mp4");

    videoElement.appendChild(sourceElement);
    liElem.appendChild(videoElement);

    if (i === 0) {
        liElem.classList.add('activeVideo');
        listWorks.appendChild(liElem);
        previousLiElement = liElem; // Сохраняем первый элемент <li>
    } else {
        // Вставляем остальные элементы после предыдущего элемента <li>
        listWorks.insertBefore(liElem, previousLiElement.nextSibling);
        previousLiElement = liElem; // Обновляем предыдущий элемент <li>
    }


}


let itemsVideo =  document.querySelectorAll('.works__video_item');
itemsVideo.forEach(element => {
    element.addEventListener('click', selectVideo);
});

function clearStyle(){
    itemsVideo.forEach(element => {
        element.classList.remove('activeVideo');
        let videoElementNew = element.querySelector('video'); // Получаем элемент video внутри li
        videoElementNew.pause();
    })
}


function selectVideo() {
    clearStyle();

    this.classList.add('activeVideo');

    // Получаем индекс кликнутого элемента li
    let selectedIndex = Array.from(itemsVideo).indexOf(this);

    // Обновляем видео в элементе mainVideo
    mainVideo.src = `../video/works/${playList[selectedIndex]}`;
}

// function nextVideo() {
//     if (number==playList.length - 1){
//         number=0;
//     } else {
//         number++;
//     }
//     preloadNextVideo(number);

//      let liVideo = document.querySelectorAll('.works__video_item');


//    for (let j =0; liVideo.length > j;j++){
//     liVideo[j].classList.remove('activeVideo')
//    }
//     liVideo[number].classList.add('activeVideo');
    
//     mainVideo.src=`../video/works/${playList[number]}`;
// }

// function previousVideo(){
// 	if (number==0){
// 		number=playList.length -1;
// 	} else{
// 		number--;
// 	}
//     preloadNextVideo(number);
//     mainVideo.src=`../video/works/${playList[number]}`;
//     let liVideo = document.querySelectorAll('.works__video_item');


//     for (let j =0; liVideo.length > j;j++){
//      liVideo[j].classList.remove('activeVideo')
//     }
//      liVideo[number].classList.add('activeVideo');
     
//      mainVideo.src=`../video/works/${playList[number]}`;
//  }



