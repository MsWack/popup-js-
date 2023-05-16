# popup-js-

JS-код для создания модального окна (поп-ап окно)

1. Необходимо получить следующие переменные:

-- кнопка, при клике на которую будет открывать модальное окно (more);
-- само модальное окно (overlay);
-- кнопка, при клике на которую модальное окно будет закрываться (close).

2. Добавляем обработчик события "click" на кнопку открытия модального окна: при клике на кнопку "more", присваиваем элементу "overlay" стиль display: block (изначально назначен стиль display: none). При необходимости добавяем аниации, заранее определенные в css, а также устаналиваем запрет на пролистывание страницы, когда модальное окно открыто.

3. Добавляем обработчик события "click" на кнопку закрытия модального окна: при клике на кнопку "close", возвращаем элементу "overlay" стиль display: none, удаляем анимацю, если она была добавлена, а также убираем запрет на пролистываение страницы, когда модальное окно открыто.