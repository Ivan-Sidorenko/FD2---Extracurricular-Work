"use strict";

var view = {
//метот displayMessage получает один аргумент - текст сообщения
    displayMessage: function(msg) {
//мы получаем элемент messageArea из страницы 
        var messageArea = document.getElementById("messageArea");
//затем, обновляем текст элемента messageArea, задавая его свойству innerHTML содержимое msg
        messageArea.innerHTML = msg;
    },
//location образуется из строки и столбца (наш выстрел как user(а)) и совпадает с идентификатором <td>
    displayHit: function(location) {
//идентификатор, созданный по введенным user(ом) координатам, используется для получения элемента
        var cell = document.getElementById(location);
/* добавление класса "hit" с помощью setAttribute - элементу при поподании 
назначается класс "hit" после чего корабль немедленно отражается в клектке */
        cell.setAttribute("class", "hit");
    },
//аналогично для промоха "miss"
    displayMiss: function(location) {
        var cell = document.getElementById(location);
//добавляем "miss"
        cell.setAttribute("class", "miss");
    }
};



//модель игрового поля / кораблей / состояния кораблей
var model = {
    boardSize: 7, //размер поля
    numShips: 3, //количество кораблей
    shipsSunk: 0, //состояние кораблей (не потоплены)
    shipLenght: 3, //длина кораблей
    
    //корабли и их позиции (фиксированные для тестирования кода)
    /* ships: [
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]},
        {locations: ["10", "11", "12"], hits: ["", "", ""]} */

    //корабли и их позиции (случайные для боевого кода)
    ships: [
        {locations: ["0", "0", "0"], hits: ["", "", ""]},
        {locations: ["0", "0", "0"], hits: ["", "", ""]},
        {locations: ["0", "0", "0"], hits: ["", "", ""]}
    ],
    
    //метод fire - выстрел, метод получает координаты выстрела
    fire: function(guess) {

        //затем, мы перебираем массив ships, последовательно проверяя каждый корабль
        for (var i = 0; i < this.numShips; i++) {

            /* здесь мы получаем объект корабля, необходимо проверить совпадают ли координаты выстрела
            с координатами одной из занимаемых им клеток */
            var ship = this.ships[i];

            //если координаты клетки присутствуют в массиве locations, значит, выстрел попал в цель
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {

                //ставим отметку в массиве "hit" по тому же индексу
                ship.hits[index] = "hit";

                //сообщаем что в клетке guess следует вывести маркер попадания
                view.displayHit(guess);

                //приказываем представлению вывести сообщение о попадании
                view.displayMessage("HIT!");

                /* добавляем проверку здесь, после того как точно будем знать, что выстрел попал,
                если корабль потоплен, то мы увеличим счетчик потопленных кораблей 
                в свойтве shipsSunk модели */
                if (this.isSunk(ship)) {

                    //сообщает user(у), что он потопил корабль
                    view.displayMessage("You sank my battleship!");
                    
                    this.shipsSunk++;
                }
                return true //возвращаем true так как выстрел удачный
            }
        }
        //сообщаем что в клетке guess следует вывести маркер промаха
        view.displayMiss(guess);

        //приказываем представлению вывести сообщение о прмахе
        view.displayMessage("You missed.");

        /* если после перебора всех кораьлей попадание так и не обнаружено, 
        user промахнулся, то метод вернет false */
        return false;
    },

    /* метод isSunk - получает объект корабля и возвращает true, 
    если корабль потоплен, или false, если нет */
    isSunk: function(ship) {
        //метод получает объект корабля и проверяет, помечены ли все клетки маркером попадания
        for (var i = 0; i < this.shipLenght; i++) {
            if (ship.hits[i] !== "hit") {
                /* если есть хотябы одна клетка, в которую еще не попали, 
                то корабль жив и метод возвращает false */
                return false;
            }
        }
        //если все клетки выбиты, то корабль потоплен, а метод возвращает true
        return true;
    },

    //метод в цикде создает корабли, пока массив ships модели не будет заполнен достаточным количеством кораблей
    generateShipLocations: function() {
        var locations;

        //для каждого корабля генерируется набор позиций, то есть занимаемых клеток
        for (var i = 0; i < this.numShips; i++) {
            do {

                //генерирутся набор позиций
                locations = this.generateShip();

                /* и проверяет, перекрываются ли эти позиции с существующими кораблями на доске,
                если есть перекрытия, нужна еще одна попытка, новые позиции генерируются, пока не будут
                найдены варианты без перекрытий */
            } while (this.collision(locations));

            /* полученные позиции без перекрытий сохраняются в 
            свойстве locations объекта корабля в массиве model.ships */
            this.ships[i].locations = locations;
        }
    },

    //метод создает массив со случайными позициями корабля, не беспокоясь о возможных перекрытиях
    generateShip: function() {
        /* Math.random генерирует число от 0 до 1 и умножаем результат на 2, чтобы получить число в диапазоне 
        от 0 до 2 (не включая 2), затем Math.floor преобразует результат в 0 или 1 */
        var direction = Math.floor(Math.random() * 2);

        var row, col;

        //если direction = 1 создаем горизонтальный корабль
        if (direction === 1) {

            //код генерирует начальную позицию корабля на игровом поле
            row = Math.floor(Math.random() * this.boardSize);

            /* значение 3 (this.boardSize - 3) заменено на (this.boardSize - this.shipLenght) 
            чтобы корабль мог использоваться с производбной длиной */
            col = Math.floor(Math.random() * (this.boardSize - this.shipLenght));

        //иначе direction = 0 создаем вертикальный корабль
        } else {
            //код генерирует начальную позицию корабля на игровом поле
            row = Math.floor(Math.random() * (this.boardSize - this.shipLenght));

            /* значение 3 (this.boardSize - 3) заменено на (this.boardSize - this.shipLenght) 
            чтобы корабль мог использоваться с производбной длиной */
            col = Math.floor(Math.random() * this.boardSize);
        }

        //набор позиций нового корабля начинается с пустого массива, в который последовательно добавляются элементы
        var newShipLocations = [];

        //в цикле до количества позиций в корабле
        for (var i = 0; i < this.shipLenght; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        //когда все позиции сгенерированы, метод возвращает массив 
        return newShipLocations;
    },

    /* метод collision получает данные корабля и проверяет, перекрывается ли хотя бы 
    одна клетка с клетками других кораблей уже находящихся на поле */
    collision: function(locations) { //locations массив нового корабля, который собираемся разместить на иговом поле
        for (var i = 0; i < this.numShips; i++) {
            
            //для каждого уже находящегося на поле
            var ship = model.ships[i]; 

            /* проверить, встречается ли какя-либо из позиций массива locations нового корабля 
            в массиве locations существующих кораблей */
            for (var j = 0; j < locations.length; j++) {

                /* метод indexOf проверяет, присутствует ли заданная позиция в массиве, 
                таким образом, если полученный индекс больше либо равен 0, мы знаем, что клетка уже занята, 
                поэтому метод возвращает true (перекрытие обнаружено) */
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    
                    /* возвращает из цикла, выполняемого в друго цикле, немедленно прерывает оба цикла, 
                    функция немедленно завершается и возвращает true */
                    return true;
                }
            }
        }

        /* если выполнение дошло до этой точки, значит, ни одна из позиций не была обнаружена в 
        других массивах, поэтому функция возвращает false (перекрытия отсутствуют) */
        return false;
    }
};



//контроллер
var controller = {
    //здесь определяется объект контроллера со свойством guesses которое инициализируетмя нулем
    guesses: 0,

    //начало метода processGuess, получающего координаты в формате "A0"
    processGuess: function(guess) {

        //метод parseGuess будет использоваться для проверки введенных данных
        var location = parseGuess(guess);

        //если не возвращает null, значит, был получен декйствительный объект location
        if (location) {
            //если пользователь ввел корректные координаты, значит, количество увеличится на 1
            this.guesses++;

            /* затем, комбинация строки и столбца передается методу fire, 
            метод fire возвращает true при попадании в корабль */
            var hit = model.fire(location);

            /* если выстрел попал в цель, а количество потопленных кораблей равно количеству 
            кораблей в игре, выводится сообщение о том, что все корабли потоплены */
            if (hit && model.shipsSunk === model.numShips) {
                /* выводим общее количество выстрелов, которое потребовалось user(у) для того, чтобы потопить 
                корабли, свойство "guesses" является свойством объекта this, то есть контроллера */
                view.displayMessage("You sank my battleships in " + this.guesses + " guesses");
            }
        }
    }
};



function parseGuess(guess) {
    //массив букв которые могут присутствовать при вводе
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    //проверка данных на null и убеждаемся что в строке два символа
    if (guess === null || guess.length !== 2) {

        //если условие не выполняется сообщаем user(у)
        alert("Oops, please enter a lettre and a number on the board.")
    } else {
        var firstChar = guess.charAt(0); //извлекает первый символ строки

        //при помощи indexOf получаем цифру в диапазоне от 0 до 6, соответствующую букве
        var row = alphabet.indexOf(firstChar);

        //код для получения второго символа (столбец поля)
        var column = guess.charAt(1);

        //функция isNaN выявляет строки и столбцы, которые не являются цифрами
        if (isNaN(row) || isNaN(column)) {
            //если условие не выполняется сообщаем user(у)
            alert("Oops, please enter a lettre and a number on the board.")
        } else if (row < 0 || row >= model.boardSize || 
            //проверка что цифры в диапазоне от 0 до 6
            column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        } else {
            //если все прошло успешно вернется строка ввиде буквы и цифры
            return row + column;
        }
    }
    //если управление передано в эту точку, значит, какая-то проверка не прошла, и метод вернет null
    return null;
}



function init() {
    //получение ссылки на кнопку fire по идентификатору
    var fireButton = document.getElementById("fireButton");

    //кнопке можно назначить обработчик события нажатия - функция handleFireButton
    fireButton.onclick = handleFireButton;

    var guessInput = document.getElementById("guessInput");
    //добавим новый обработчик - для обработк событий нажатия клавиш в поле ввода HTML
    guessInput.onkeypress = handleKeyPress;

    /* метод model.generateShipLocations() вызывается из функции init, чтобы это происходило
    во время загрузки игры (до ее начала), при таком вызове позиции всех кораблей будут определенны 
    к моменту начала игры */
    model.generateShipLocations();
}



//функция будет вызываться при нажатии на кнопку fire
function handleFireButton() {
    //сначала мы получаем ссылку на элемент формы по идентификатору элемента "guessInput"
    var guessInput = document.getElementById("guessInput");

    //затем, извлекаем данные введенные пользователем, координаты хранятся в свойстве value элемента input
    var guess = guessInput.value;

    //координаты выстрела передаются контроллеру
    controller.processGuess(guess);

    /* короткая команда просто удаляет содержимое input формы, заменяя его пустой строкой,
    это делается чтобы перед последующим вводом не нужнобыло руками чистить поле ввода */
    guessInput.value = "";
}

//браузер должен выполнить init при загрузке страницы
window.onload = init;



//обработчик нажатий клавиш вызывается при каждом нажатии клавиши в поле input страницы
function handleKeyPress(e) {/* "e" браузер передает объект события обработчику, объект содержит 
                            информацию о том, какая клавиша была нажата */
    var fireButton = document.getElementById("fireButton");

    /* если нажата клавиша Enter, то свойство keyCode события равно - 13, в таком случае кнопка fire 
    должна сработать так, словно user щелкнул по ней, для этого можно вызвать метод click кнопки fireButton */
    if (e.keyCode === 13) {
        fireButton.click();

        //возвращаем false, чтобы форма не делала ничего лишнего (например: не пыталась передать данные)
        return false;
    }
}