popup-js-

### JS-код для создания модального окна (поп-ап окно)

1. Необходимо получить следующие переменные:
* кнопка, при клике на которую будет открывать модальное окно `more`;
* само модальное окно `overlay`;
* кнопка, при клике на которую модальное окно будет закрываться `close`.

2. Добавляем обработчик события "click" на кнопку открытия модального окна: при клике на кнопку `more`, присваиваем элементу `overlay` стиль `display: block` (изначально назначен стиль `display: none`). При необходимости добавяем аниации, заранее определенные в css, а также устаналиваем запрет на пролистывание страницы, когда модальное окно открыто.

3. Добавляем обработчик события "click" на кнопку закрытия модального окна: при клике на кнопку `close`, возвращаем элементу `overlay` стиль `display: none`, удаляем анимацю, если она была добавлена, а также убираем запрет на пролистываение страницы, когда модальное окно открыто.

---

Если необходимо подключить скрипт модального окна сразу к нескольким кнопкам, можно создать отдельно функции для открытия и закрытия модального окна и применять обработчик события `click` к отдельным элементам. Например:

    let more = document.querySelector(".more"),
    descrBtns = document.querySelectorAll(".description-btn"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close");

    function showModal() {
      overlay.style.display = "block";
      more.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    }

    function hideModal() {
      overlay.style.display = "none";
      more.classList.remove("more-splash");
      document.body.style.overflow = "";
    }

    more.addEventListener("click", showModal);
    close.addEventListener("click", hideModal);
    
    descrBtns.forEach(function (button) {
        button.addEventListener("click", showModal);
    });
    
Также в этом примере `descrBtns.forEach` перебирает все кнопки в `descrBtns` и применяет функцию `showModal` к каждой из них в качестве обработчика события "click". Теперь при клике на любую кнопку из `descrBtns` будет отображаться модальное окно.
