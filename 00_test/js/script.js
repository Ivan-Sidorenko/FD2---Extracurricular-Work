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



function makeCar() {
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
displayCar(carToSell);