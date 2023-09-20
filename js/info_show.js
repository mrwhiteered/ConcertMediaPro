// Находим все элементы .s2__item
let items = document.querySelectorAll('.s2__item');


let screenSize = window.innerWidth;

if (screenSize >960){
    items.forEach(function(item) {
   
        item.addEventListener('mouseover', function () {
            console.log('навели')
              // Находим все элементы <li> с классом "s2__include_item" внутри текущего элемента .s2__item
              let includeItems = item.querySelectorAll('.s2__include_item');
            
              includeItems.forEach(function (item, i) {
                  // Переключаем класс для добавления анимации
                  item.classList.add('s2_active');
  
                  // Устанавливаем продолжительность анимации в зависимости от значения i
                  var animationDuration = (i + 1) * 0.3 + 's'; // Например, 0.2s, 0.4s, 0.6s и так далее
                  item.style.transition = 'all ' + animationDuration;
              });
              
            
        } );
   
        item.addEventListener('mouseout', function(){
            let includeItems = item.querySelectorAll('.s2__include_item');
            
            includeItems.forEach(function (item, i) {
                // Переключаем класс для удаления анимации
                item.classList.remove('s2_active');

                // Устанавливаем продолжительность анимации в зависимости от значения i
                var animationDuration = 1.2 - (i * 0.3) + 's'; // Например, 0.2s, 0.4s, 0.6s и так далее
                item.style.transition = 'all ' + animationDuration;
            });
            
           
        })
    

    });
} else {
    // Добавляем обработчик события click к каждому элементу .s2__item
    items.forEach(function (item) {
        let flag = false;
    item.addEventListener('touchend', function () {
        
        if (!flag){
            // Находим все элементы <li> с классом "s2__include_item" внутри текущего элемента .s2__item
            let includeItems = item.querySelectorAll('.s2__include_item');
            
            includeItems.forEach(function (item, i) {
                // Переключаем класс для добавления анимации
                item.classList.add('s2_active');

                // Устанавливаем продолжительность анимации в зависимости от значения i
                var animationDuration = (i + 1) * 0.3 + 's'; // Например, 0.2s, 0.4s, 0.6s и так далее
                item.style.transition = 'all ' + animationDuration;
            });
            
            flag = true;

        } else {
            // Находим все элементы <li> с классом "s2__include_item" внутри текущего элемента .s2__item
            let includeItems = item.querySelectorAll('.s2__include_item');
            
            includeItems.forEach(function (item, i) {
                // Переключаем класс для удаления анимации
                item.classList.remove('s2_active');

                // Устанавливаем продолжительность анимации в зависимости от значения i
                var animationDuration = 1.2 - (i * 0.3) + 's'; // Например, 0.2s, 0.4s, 0.6s и так далее
                item.style.transition = 'all ' + animationDuration;
            });
            
            flag = false;
        }
    });
    });
}