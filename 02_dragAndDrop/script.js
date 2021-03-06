const dragAndDrob = () => {
    const card = document.querySelector(".js-card"); //объявляем переменную (это наша карточка)
    const cells = document.querySelectorAll(".js-cell"); //получение всех ячеек (это наша "cell")

    const dragStart = function() { //ф-ция dragStart позваляет потянуть карточку, но отпуская ее она исчезает
        setTimeout(() => { //ф-ция setTimeout создает время, 
            this.classList.add("hide"); //через которое наш this отрабатывает 
        }, 0) //(в нашем случаем мы ставим "0"), если поставить число выше "0", 
    }; //то какое-то время мы будем видеть картоку которую тянем - на прежнем месте, а нам это не нужно

    const dragEnd = function() { //ф-ция dragEnd позваляет нам отпустить карточку, а отпуская ее она видна
        this.classList.remove("hide");
    };

    //необходимо передавать параметр evt и делать evt.preventDefault(), делается чтобы сработал dragDrop
    const dragOver = function(evt) { 
        evt.preventDefault();
    };

    const dragEnter = function(evt) {
        evt.preventDefault(); //также добавляется - чисто для безопасности
        this.classList.add("hovered");
    };

    const dragLeave = function() {
        this.classList.remove("hovered");
    };

    const dragDrop = function() {
        this.append(card);
        this.classList.remove("hovered"); 
        //this.classList.remove("hovered") удаляем тень у append(енной) ячейки, которой присвоили карточку
    };

    cells.forEach((cell) => {
        cell.addEventListener("dragover", dragOver);
        //событие dragover срабатывает "1" раз когда мы карточку проводим 
        //над ячейкой и ее можно туда Drop(нуть) - важное событие
        cell.addEventListener("dragenter", dragEnter); 
        //событие dragenter срабатывает когда мы карточку проводим над ячейкой и ее можно туда Drop(нуть)
        cell.addEventListener("dragleave", dragLeave);
        //событие dragleave срабатывает когда мы покинули карточкой приделы ячейки, 
        //а заводя в ячейку срабатывает dragenter, сообщая что мы вошли в пределы ячейки, 
        //новой или вернулись назад в ячейку
        cell.addEventListener("drop", dragDrop);
    });

    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
};

dragAndDrob();