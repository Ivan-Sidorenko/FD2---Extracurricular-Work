"use strict";

let diameter = 450; //диаметр часов
createClock(diameter);

function createClock(clockDiameter) {
    let deflectionAngle = 0;
    let baseClock = createClockBackground(clockDiameter);
    createNumCircles(baseClock, deflectionAngle, clockDiameter);
    createClockArrows(baseClock, clockDiameter);
    updateTime()
    setTimeout(updateTime, 1020);
}

function updateTime() {
    var currTime = new Date();
    var timeNow = str0l(currTime.getHours(), 2) + ":" + str0l(currTime.getMinutes(), 2) + ":" + str0l(currTime.getSeconds(), 2);
    document.getElementById("timeArea").innerHTML = timeNow;
    arrowHourMovement(currTime.getHours(), currTime.getMinutes());
    arrowMinuteMovement(currTime.getMinutes(), currTime.getSeconds());
    arrowSecondMovement(currTime.getSeconds());
    setTimeout(updateTime, 1020 - currTime.getMilliseconds());
}

function str0l(val, len) {
    var strVal = val.toString();
    while ( strVal.length < len )
        strVal =  '0' + strVal;
    return strVal;
}

//создание фона циферблата
function createClockBackground(clockDiameter) {
    //основной круг циферблата
    let clockArea = document.createElement("div");
    clockArea.id = "clockArea"
    clockArea.style.width = clockDiameter + "px";
    clockArea.style.height = clockDiameter + "px";
    clockArea.style.position = "relative";
    clockArea.style.margin = "0 auto";
    clockArea.style.borderRadius = "50%";
    clockArea.style.boxShadow = "-1px -1px 2px #eee, -1px 0px 3px #eee, -4px 8px 8px rgba(0,0,0,0.1), -8px 16px 16px rgba(0,0,0,0.1), -16px 32px 32px rgba(0,0,0,0.15), -32px 64px 64px rgba(0,0,0,0.25)";
    clockArea.style.backgroundImage = "linear-gradient(to right, rgba(179, 179, 179, 1) 0%, rgba(250, 250, 250, 1) 100%), linear-gradient(to right, rgba(179, 179, 179, 1) 0%, rgba(250, 250, 250, 1) 100%)";
    clockArea.style.color = "#2B2A29";
    clockArea.style.fontWeight = 400;
    document.getElementById("container").append(clockArea);
    //блок для вывода электронного времени
    let timeArea = document.createElement("div");
    timeArea.id = "timeArea"
    timeArea.style.width = clockDiameter / 2 + "px";
    timeArea.style.fontSize = clockDiameter / 15 + "px";
    timeArea.style.textAlign = "center";
    timeArea.style.position = "absolute";
    timeArea.style.top = clockDiameter / 4 + "px";
    timeArea.style.left = (clockDiameter / 2) - ((clockDiameter / 2) / 2) + "px";
    document.getElementById("clockArea").append(timeArea);
  
    return clockArea;
}

//создание цифровых кружков
function createNumCircles(_baseClock, deflectionAngle, clockDiameter) {
    for (let i = 1; i < 13; i++) {
        //кружки - блоки цифр
        let numberArea = document.createElement("div");
        numberArea.id = i;
        numberArea.style.height = clockDiameter / 7 + "px";
        numberArea.style.width = clockDiameter / 7 + "px";
        numberArea.style.borderRadius = "50%";
        numberArea.style.backgroundImage = "linear-gradient(0.06deg, rgba(250, 250, 250, 1) 0%, rgba(246, 246, 246, 1) 29.62%, rgba(234, 234, 234, 1) 58.47%, rgba(215, 215, 215, 1) 86.92%, rgba(204, 204, 204, 1) 99.22%)";
        numberArea.style.color = "#2B2A29";
        numberArea.style.textAlign = "center";
        numberArea.style.position = "absolute";
        document.getElementById("clockArea").append(numberArea);
        //числа
        let number = document.createElement("span");
        number.style.fontSize = clockDiameter / 12 + "px";
        number.style.top = clockDiameter / 53 + "px";
        number.style.position = "relative";
        number.append(i);
        numberArea.append(number);
        deflectionAngle += 30;
        //centerRadius расстояние от центра часов до центра круга (блока цифры)
        let centerRadius = (clockDiameter / 2) - (parseFloat(numberArea.style.height) / 1.5);
        let angle = deflectionAngle / 180 * Math.PI;
        //(clockDiameter / 2) центр часов по оси X и Y
        let numberAreaCenterX = (clockDiameter / 2) + centerRadius * Math.sin(angle);
        let numberAreaCenterY = (clockDiameter / 2) - centerRadius * Math.cos(angle);
        numberArea.style.left = Math.round(numberAreaCenterX - numberArea.offsetWidth / 2) + "px";
        numberArea.style.top = Math.round(numberAreaCenterY - numberArea.offsetWidth / 2) + "px" ;
    }
}

//создание стрелок
function createClockArrows(_baseClock, clockDiameter) {
    //часовая стрелка
    let hourArrow = document.createElement("div");
    hourArrow.id = "hourArrow";
    hourArrow.style.height = clockDiameter / 3 + "px";
    hourArrow.style.width = clockDiameter / 30 + "px";
    hourArrow.style.backgroundColor = "#2B2A29";
    hourArrow.style.borderRadius = "10px";
    hourArrow.style.position = "absolute";
    hourArrow.style.transformOrigin = "50% 90%";
    clockArea.append(hourArrow);
    //центрирование часовой стрелки
    hourArrow.style.left = (clockDiameter / 2) - hourArrow.offsetWidth / 2 + "px";
    hourArrow.style.top = (clockDiameter / 2) - hourArrow.offsetHeight * 0.9 + "px";
    //минутная стрелка
    let minuteArrow = document.createElement("div");
    minuteArrow.id = "minuteArrow";
    minuteArrow.style.height = clockDiameter / 2.5 + "px";
    minuteArrow.style.width = clockDiameter / 50 + "px";
    minuteArrow.style.backgroundColor = "#2B2A29";
    minuteArrow.style.borderRadius = "10px";
    minuteArrow.style.position = "absolute";
    minuteArrow.style.transformOrigin = "50% 90%";
    clockArea.append(minuteArrow);
    //центрирование минутной стрелки
    minuteArrow.style.left = (clockDiameter / 2) - minuteArrow.offsetWidth / 2 + "px";
    minuteArrow.style.top = (clockDiameter / 2) - minuteArrow.offsetHeight * 0.9 + "px";
    //секундная стрелка
    let secondArrow = document.createElement("div");
    clockArea.append(secondArrow);
    secondArrow.id = "secondArrow";
    secondArrow.style.height = clockDiameter / 2 + "px";
    secondArrow.style.width = clockDiameter / 250 + "px";
    secondArrow.style.backgroundColor = "#f33";
    secondArrow.style.position = "absolute";
    secondArrow.style.transformOrigin = "50% 90%";
    //центрирование секундной стрелки
    secondArrow.style.left = (clockDiameter / 2) - secondArrow.offsetWidth / 2 + "px";
    secondArrow.style.top = (clockDiameter / 2) - secondArrow.offsetHeight * 0.9 + "px";
}

//движение часовой стрелки
function arrowHourMovement(nowHour, nowMinute) {
    let hourArrow = document.getElementById("hourArrow");
    hourArrow.style.transform = "rotate(" + (30 * (nowHour + (1 / 60) * nowMinute)) + "deg)";
}
//движение минутной стрелки
function arrowMinuteMovement(nowMinute, nowSecond) {
    let minuteArrow = document.getElementById("minuteArrow");
    minuteArrow.style.transform = "rotate(" + (6 * (nowMinute + (1 / 60) * nowSecond)) + "deg)";
}
//движение секундной стрелки
function arrowSecondMovement(nowSecond) {
    let secondArrow = document.getElementById("secondArrow");
    secondArrow.style.transform = "rotate(" + (6 * nowSecond) + "deg)";
}