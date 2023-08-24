document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            var url = this.getAttribute("href");
            document.body.style.animation = "fadeOut 1.3s ease"; // Добавляем анимацию
            setTimeout(function() {
                window.location.href = url;
            }, 300);
        });
    });
});