"use strict";

//создаем функцию init после создания модели DOM, для этого используем свойство onload объекта window
window.onload = init;

//функция init получает ссылку на изображение
function init() {
    /* происходит выборка элементов по имени тега img, вызов находит все тэги изображения 
    и возвращает весь набор, результаты сохраняются в images */
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        /* затем, перебираем все изображения и поочередно назначаем обработчик события щелчка
        showAnswer каждому изображению, после завершения цикла свойству onclick каждого 
        изображения назначен обработчик события showAnswer */
        images[i].onclick = showAnswer;
    }
}

//функция showAnswer востанавливает исходное (неразмытое) изображение
function showAnswer(eventObj) { //объект eventObj события передается при каждом щелчке на изображение
    /* свойство target объекта события содержит ссылку на элемент на котором был сделан щелчок (нажатие) */
    var image = eventObj.target;

    //используем свойство id для получения имени неразмытого изображения
    var name = image.id;
    name = name + ".jpg";
    //полученное имя назначается свойству src
    image.src = name;
}