const inputNum = document.getElementById("input_num");
const outputNum = document.getElementById("output_num");


const zeroNum = document.getElementById('zero_num').innerHTML
const oneNum = document.getElementById('one_num').innerHTML
const twoNum = document.getElementById('two_num').innerHTML
const threeNum = document.getElementById('three_num').innerHTML
const fourNum = document.getElementById('four_num').innerHTML
const fiveNum = document.getElementById('five_num').innerHTML
const sixNum = document.getElementById('six_num').innerHTML
const sevenNum = document.getElementById('seven_num').innerHTML
const eightNum = document.getElementById('eight_num').innerHTML
const nineNum = document.getElementById('nine_num').innerHTML
const dot = document.getElementById('dot').innerHTML


const additionSign = document.getElementById('addition_operator').innerHTML;
const substractionSign = document.getElementById('substraction_operator').innerHTML;
const multiplicationSign = document.getElementById('mupliplication_operator').innerHTML;
const devideSign = document.getElementById('devide_operator').innerHTML;
const remainderSign = document.getElementById('remainder_operator').innerHTML;

const parenthesesLeft = document.getElementById('parentheses_left').innerHTML;
const parenthesesRight = document.getElementById('parentheses_right').innerHTML;




function zeroFunc() {
    inputNum.innerHTML += zeroNum
}
function oneFunc() {
    inputNum.innerHTML += oneNum
}
function twoFunc() {
    inputNum.innerHTML += twoNum
}
function threeFunc() {
    inputNum.innerHTML += threeNum
}
function fourFunc() {
    inputNum.innerHTML += fourNum
}
function fiveFunc() {
    inputNum.innerHTML += fiveNum
}
function sixFunc() {
    inputNum.innerHTML += sixNum
}
function sevenFunc() {
    inputNum.innerHTML += sevenNum
}
function eightFunc() {
    inputNum.innerHTML += eightNum
}
function nineFunc() {
    inputNum.innerHTML += nineNum
}
function dotFunc() {
    if (inputNum == '.') {
        inputNum.innerHTML += dot
    } else {
        inputNum.innerHTML = dot
    }
}


function additionFunc() {
    if (inputNum == '+') {
        inputNum.innerHTML += additionSign
    } else {
        inputNum.innerHTML = additionSign
    }

}

function substractionFunc() {
    if (inputNum == '-') {
        inputNum.innerHTML += substractionSign
    } else {
        inputNum.innerHTML = substractionSign
    }


}

function multiplicationFunc() {
    let lastChar = inputNum.innerHTML.slice(-1);
    if (lastChar.match(/[0-9]/)) {
        inputNum.innerHTML += multiplicationSign
    }

}

function devideFunc() {
    let lastChar = inputNum.innerHTML.slice(-1);
    if (lastChar.match(/[0-9]/)) {
        inputNum.innerHTML += devideSign
    }
}

function remainderFucn() {
    let lastChar = inputNum.innerHTML.slice(-1);
    if (lastChar.match(/[0-9]/)) {
        inputNum.innerHTML += remainderSign
    }
}

function parenthesesLeftFunc() {
    let lastChar = inputNum.innerHTML.slice(-1);
    // Check if the last character is an operator or an open parenthesis
    if (lastChar.match(/[\+\-\*\/\%\(]/)) {
        inputNum.innerHTML += parenthesesLeft
    }
}

function parenthesesRightFunc() {
    let lastChar = inputNum.innerHTML.slice(-1);
    // Check if the last character is a digit or a close parenthesis
    if (lastChar.match(/[0-9\)]/)) {
        inputNum.innerHTML += parenthesesRight
    }
}

function finalAnswer() {
    outputNum.innerHTML = eval(inputNum.innerHTML)
}

function deleteInput() {
    const result = inputNum.innerHTML.toString().slice(0, -1);
    inputNum.innerHTML = result;
}

function clearAll() {
    inputNum.innerHTML = "";
    outputNum.innerHTML = "";
}


// Time,Day and Date

function updateTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const currentDateElement = document.getElementById("currentDate");
    const currentDayElement = document.getElementById("currentDay");

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    const currentTimeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    currentTimeElement.innerText = currentTimeString;

    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateString = now.toLocaleDateString("en-US", options);
    currentDateElement.innerText = dateString;

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekString = daysOfWeek[now.getDay()];
    currentDayElement.innerText = dayOfWeekString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to set the time when the page loads
updateTime();

// Next Project 

var youtubeIcon = document.getElementById("nextDay");

// Add a click event listener
youtubeIcon.addEventListener("click", function () {
    // Open the YouTube link when the div is clicked
    window.open("https://github.com/mdkhan2024/", "_blank");
});