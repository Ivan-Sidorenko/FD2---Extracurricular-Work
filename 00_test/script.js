//работа с циклом "while" и блоками "if - else"
/* var word = "bottles";

var count = 99;

while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer");
    console.log("Take one down, pass is around,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall.");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    }
} */



//работа с функциями "function"
//опред. ф-ции нач. с ключ. слова "function"
// далее след. имя ф-ции например "bark" 
// а теперь указ-ся два знач. (называют параметры ф-ции) "name, weight"
/* function bark(name, weight) { 
    if (weight > 20) { //снач. пров. знач. weight
        console.log(name + " says WOOF WOOF");
    } else { //а затем, вывод. имя собаки с одним из сообщений: WOOF WOOF или woof woof
        console.log(name + " says woof woof");
    }
}

bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17); */



//работа с массивами "Array"
/* function makePhrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
}
makePhrases(); */



//работа с Array и while (перебор массива)
//while
/* var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var output; //пер-ная для хр-ния текущ. индекса

var i = 0;
while (i < scores.length) { //цикл продолж., пока индекс ост. < "length" (длины) массива
    output = "Bubble solution #" + i + "scores: " + scores[i]; //затем, мы созд. выходную строку
    //с номером раствора (индекс массива и результатом)
    console.log(output); //строка выводится вызовом "console.log"
    i = i + 1; //наконец, индекс увеличивается на 1 перед повторн. прохождением цикла
} */



//цикл for
/* var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var output;

for (var i = 0; i < scores.length; i++) {// i = i + 1 тоже самое что i++
    output = "Bubble solution #" + i + "scores: " + scores[i];
    console.log(output);
} */



/* var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var highScore = 0;
var output;

for (var i = 0; i < scores.length; i++) {// i = i + 1 тоже самое что i++
    output = "Bubble solution #" + i + "scores: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}

console.log("Bubbles test: " + scores.length);
console.log("Highest bubble score: " + highScore); */



//function
/* var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29,];

function printAndGetHighScores(scores) {
    var highScore = 0;
    var output;

    for (var i = 0; i < scores.length; i++) {// i = i + 1 тоже самое что i++
        output = "Bubble solution #" + i + "scores: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore) {
    var bestSolutions = [];

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }  
    return bestSolutions;
}

function getMostCostEffectiveSolution(scores, costs, highScore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                costs = costs[i];
            }
        }
    }
    return index;
}

var highScore = printAndGetHighScores(scores);
console.log("Bubbles test: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solution with the higest score: " + bestSolutions);

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective"); */



//цикл while переписание в for
//while:
/* var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];

var hasBubbleGum = [false, false,false, true];

var i = 0;
while (i < hasBubbleGum.length) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
    i = i + 1;
} */



//for:
/* var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];

var hasBubbleGum = [false, false,false, true];

for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
} */



//objects - объекты
/* var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthAlook = prequal(taxi);

if (worthAlook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
} */



/* function getSecret(file, secretPassword) {
    file.opend = file.opend + 1;
    if (secretPassword == file.password) {
        return file.content;
    }
    else {
        return "Invalid password! No secret for you."
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opend = 0;
        file.content = secret;
    }
}

var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    content: "Dr. Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret); */



/* function makeCar() {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadilac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    }
    return car;
}

function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

var carToSell = makeCar();
displayCar(carToSell); */



/* var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,

    start: function() {
        if (this.fuel == 0) {
            alert("Бак пустой fiat не заведен!")
        } else {
            this.started = true;
        }
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " +
                this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
}; */



//DOM
/* function init() {
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit phaser fire!"
    planet.setAttribute("class", "redtext");
}

window.onload = init; */



//типы данных работа с typeof
/* var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];

function test9() {
    return "abcdef";
}

var test10 = null;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10); */



//Обработчики событий
/* function pageLoadedHendler() {
    alert("I'm alive!");
}

window.onload = pageLoadedHendler; */



//первоклассные значения (функции)
/* var passengers = [{name: "Jane Doloop", paid: true, ticket: "coach"},
                  {name: "Dr. Evel", paid: true, ticket: "firstclass"},
                  {name: "Sue Property", paid: false, ticket: "firstclass"},
                  {name: "John Funcall", paid: true, ticket: "premium"}];

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNoPaid(passenger) {
    return (!passenger.paid);
}

function processPassengers(passengers, testFunction) {
    for (var i = 0; i <passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

var allCanFly = processPassengers(passengers, checkNoFlyList); 
if (!allCanFly) {
    console.log("The plane can't take off: we have a passengers on the no-fly-list");
}

var allPaid = processPassengers(passengers, checkNoPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

function printPassengers(passenger) {
    var message = passenger.name;

    if (passenger.paid === true) {
        message = message + " has paid";
    } else {
        message = message + " has not paid"
    }
    console.log(message);
    return false;
}

processPassengers(passengers, printPassengers);

function createDrinkOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or wine?");
        }
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like wine, cola or water?");
        }
    } else {
        orderFunction = function() {
            alert("Your choice is cola or water?");
        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like chicken or pasta?");
        }
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like a snack box or cheese plate?");
        }
    } else {
        orderFunction = function() {
            alert("Would you like peanuts or pretzels?");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);

    getDrinkOrderFunction();

    getDinnerOrderFunction();
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers); */



//первоклассные функции + метод sort массива
/* var products = [{name: "Grapefruit", calories: 170, color: "red", sold: 8200},
                {name: "Orange", calories: 160, color: "orange", sold: 12101},
                {name: "Cola", calories: 210, color: "caramel", sold: 25412},
                {name: "Diet Cola", calories: 0, color: "caramel", sold: 43922},
                {name: "Lemon", calories: 200, color: "clear", sold: 14983},
                {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
                {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
                {name: "Water", calories: 0, color: "clear", sold: 62123}];

function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}

function printProducts(products) {
    for (var i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name +
                    ", Calories: " + products[i].calories +
                    ", Color: " + products[i].color +
                    ", Sold: " + + products[i].sold);
    }
}

function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
}

function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else {
        return -1;
    }
}

function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}

products.sort(compareName);
console.log("Products sorted by name:")
printProducts(products);

products.sort(compareCalories);
console.log("Products sorted by calories:")
printProducts(products);

products.sort(compareColor);
console.log("Products sorted by color:")
printProducts(products); */



//анонимные функции
//было
/* function vaccine() {
    if (dosage > 0) {
        inject(dosage);
    }
}

administer(patient, vaccine, time); */

//стало
/* administer(patient, function(dosage) {
    if (dosage > 0) {
        inject(dosage);
    }
}, time); */



//замыкания 
/* function makeCounter() {
    var count = 0;

    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount()); */



/* function makePassword(password) {
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    }
}

var tryGuess = makePassword("secret");
console.log("Guess \"nope\": " + tryGuess("nope"));
console.log("Guess \"secret\": " + tryGuess("secret")); */



/* function multN(n) {
    return function multBy(m) {
        return n*m;
    };
}

var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3)); */



/* Замыкание в обработчике событий */
//программа без замыкания
/* var count = 0;

window.onload = function() {
    var button = document.getElementById("clickme");    
    button.onclick = handleClick;
};

function handleClick() {
    var message = "You clicked me ";
    var div = document.getElementById("message");
    count++;
    div.innerHTML = message + count + " times!"
} */

//программа с замыканием
/* window.onload = function() {
    var count = 0;
    var message = "You clicked me ";
    var div = document.getElementById("message");

    var button = document.getElementById("clickme");    
    button.onclick = function() {
        count++;
        div.innerHTML = message + count + " times!"
    };
}; */



//Создание объектов / конструкторы объектов
/* function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
} */



/* function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    dogs[i].bark();
} */



/* function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;

    this.getSize = function() {
        if (this.ounces === 8) {
            return "small";
        } else if (this.ounces === 12) {
            return "medium";
        } else if (this.ounces === 16) {
            return "large";
        }
    };

    this.toString = function() {
        return "You've ordered a " + this.getSize() + " "
                                   + this.roast + " coffee.";
    };
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString()) */



/* function Car (make, model, year, color, passengers, convertible, mileage, started) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = started;

    this.start = function() {
        this.started = true;
    };

    this.stop = function() {
        this.started = false;
    }

    this.drive = function() {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("You need to start engine first.")
        }
    };
}

var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

var cars = [chevy, cadi, taxi, fiat, testCar];

for(var i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
} */



/* var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);

var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

var cadi = new Car(cadiParams);

function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function() {
        this.started = true;
    };

    this.stop = function() {
        this.started = false;
    }

    this.drive = function() {
        if (this.started) {
            console.log("Zoom zoom!");
        } else {
            console.log("You need to start engine first.")
        }
    };
}

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

var limoParams = {
    make: "Webville Motors",
    model: "limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: true,
    mileage: 21120
};

var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poddle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog); */



/* function dogCather(obj) {
    if (obj instanceof Dog) { 
        return true;
    } else {
        return false;
    }
}

//более компактный вариант 
//function dogCatcher(obj) {
//    return (obj instanceof Dog);
//}

function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

var fido = {name: "Fido", breed: "Mixed", weight: 38};

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
    if (dogCather(dogs[i])) {
        console.log(dogs[i].name + " is a dog");
    }
} */