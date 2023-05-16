window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    //МОДАЛЬНОЕ ОКНО
    //получаем кнопку, при клике на которую будет открываться модальное окно
    let more = document.querySelector(".more"),
        //получаем само модальное окно
        overlay = document.querySelector(".overlay"),
        //получаем элемент, при клике на который модальное окно будет закрываться (крестик)
        close = document.querySelector(".popup-close");

    //при клике на кнопку..
    more.addEventListener("click", function () {
        //выставляем для модального окна стиль display: block..
        overlay.style.display = "block";
        //.. и добавляем класс с анимацией
        this.classList.add("more-splash");
        //устанавливаем запрет на пролистываение страницы, когда модальное окно открыто
        document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });
});
