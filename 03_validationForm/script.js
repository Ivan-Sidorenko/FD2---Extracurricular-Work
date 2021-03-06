"use strict";

//объявляем границы поиска var form (область где будем искать валидируемые значения)
var form = document.querySelector(".formWithValidation");

//таким образом следующая строка имеет вид var validateBtn = form.querySelector(".formWithValidation .validateBtn"), 
//а вместо document.querySelector указываем form.querySelector (рамки той самой области поиска), 
//а строку (".formWithValidation .validateBtn") меняем на (".validateBtn")
var validateBtn = form.querySelector(".validateBtn");

var from = form.querySelector(".from");
var password = form.querySelector(".password");
var passwordConfirmation = form.querySelector(".passwordConfirmation");
var where = form.querySelector(".where");
var messege = form.querySelector(".messege");
var fields = form.querySelectorAll(".field"); //получение всех пустых полей

var generateError = function (text) {
    var error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.innerHTML = text;
    return error;
};

var checkPasswordMatch = function () {
    if (password.value !== passwordConfirmation.value) {
        console.log('not equals')
        var error = generateError('Password doesnt match')
        console.log(error)
        password.parentElement.insertBefore(error, password)
    }
};

var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blank', fields[i])
            var error = generateError('Cant be blank')
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
};

var removeValidation = function () {
    var errors = form.querySelectorAll('.error')

    for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    removeValidation();
    checkFieldsPresence();
    checkPasswordMatch();
})