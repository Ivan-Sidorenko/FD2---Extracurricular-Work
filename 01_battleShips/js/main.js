"use strict";

//позиции корабля (корабль один из трех клеток - трехпалубный)
var location1 = 3;
var location2 = 4;
var location3 = 5;

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
        guesses = guesses + 1; //если значение которое ввел пользователь в рамках от 0 до 6, то значение
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
        if (guess == location1 || guess == location2 || guess == location3) {
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

alert(stats);