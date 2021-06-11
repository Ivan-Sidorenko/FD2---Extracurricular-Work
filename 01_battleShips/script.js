"use strict";

//позиции корабля (корабль один из трех клеток - трехпалубный)
/* var randomLoc = Math.floor(Math.random() * 5);  */
/* "*" - умножая случайное число на 5 мы получаем случайное число в диапазоне от 0 до 5, не включая 5
пример: 0.13983, 4.231, 2.3451 или 4.999 "Math.floor" отбрасывает дробную часть округляя в меньшему 
целому числу в результате 0.13983 превращается в 0, 2.3451 в 2 или 4.999 в 4 */

/* var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 2;

var guess; //номер текущей попытки
var hits = 0; //количество попаданий (в начале "0" так как мы еще ниразу не попали)
var guesses = 0; //количество попыток

var isSunk = false; //значение потоплен ли корабль (так как нет, то работаем 
                    //с булевыми значениями и в начале игры присваевам "false")

while (isSunk == false) { //проверка значения корабля на значение "true" потоплен
    guess = prompt("Ready, aim, fire! (enter a number 0-6):"); //просим пользователя ввести значение от 
                                                               //от 0 до 6 (выстрел по кораблю)
    if (guess < 0 || guess > 6) { //проверка (если значение которое ввел пользователь (< 0 или > 6), то 
        alert("Please enter a valid cell number!"); //вывести сообщение "введите корректное число"
    } else {
        guesses = guesses + 1; */ //если значение которое ввел пользователь в рамках от 0 до 6, то значение
                               //попытки увеличить на 1

        //код проверки попаданий
        /* if (guess == location1) {
            hits = hits + 1;
        } else if (guess == location2) {
            hits = hits + 1;
        } else if (guess == location3) {
            hits = hits + 1;
        } */

        //код проверки попаданий "упращенный"
        /* if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT"); //сообщаем пользователю о попадании
            hits = hits + 1;

            //проверка равны ли попадания 3-м 
            if (hits == 3) {
                
                isSunk = true; //при условии 3-но попадания

                alert("You sank my battleship"); //вывести сообщение "ты потопил мой корабль" 
                                                 //при условии 3-но попадания
            }
        } else {
            alert("MISS"); //сообщаем пользователю о промахе
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + //переменная статистики попаданий
            "which means your shooting accuracy was " + (3/guesses);

alert(stats); */



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
    
    //корабли и их позиции
    ships: [
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]},
        {locations: ["10", "11", "12"], hits: ["", "", ""]}
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
    }
};



//контроллер
var controller = {
    //здесь определяется объект контроллера со свойством guesses которое инициализируетмя нулем
    guesses: 0,

    //начало метода processGuess, получающего координаты в формате "A0"
    processGuess: function() {

        //метод parseGuess будет использоваться для проверки введенных данных
        var location = parseGuess(guess);
        if (location) {

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