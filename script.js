// Magic with DOM  
const inputNum = document.getElementById("input_num");
const outputNum = document.getElementById("output_num");

 
document.addEventListener('keydown', function(event) {
  
    if (event.key === 'Enter') {
        event.preventDefault();
        finalAnswer();
    } else if (event.key === 'Backspace') {
        event.preventDefault();
        deleteInput();
    } else if (event.key === 'Escape') {
        event.preventDefault();
        clearAll();
    }
});

// event 4 keyboard number and operator input
document.addEventListener('keypress', function(event) {
    // Allow only specific characters
    const allowedChars = '0123456789.+-*/%()\b';
    
    if (allowedChars.includes(event.key)) {
        event.preventDefault();
        
        // on keyboard handling
        switch(event.key) {
            case '0': zeroFunc(); break;
            case '1': oneFunc(); break;
            case '2': twoFunc(); break;
            case '3': threeFunc(); break;
            case '4': fourFunc(); break;
            case '5': fiveFunc(); break;
            case '6': sixFunc(); break;
            case '7': sevenFunc(); break;
            case '8': eightFunc(); break;
            case '9': nineFunc(); break;
            case '.': dotFunc(); break;
            case '+': additionFunc(); break;
            case '-': substractionFunc(); break;
            case '*': multiplicationFunc(); break;
            case '/': devideFunc(); break;
            case '%': remainderFucn(); break;
            case '(': parenthesesLeftFunc(); break;
            case ')': parenthesesRightFunc(); break;
            case 'Enter': finalAnswer(); break;
        }
    }
});

// Number input functions
function numberInput(num) {
    // Prevent leading zeros
    if (inputNum.innerHTML === '0') {
        inputNum.innerHTML = num;
    } else {
        inputNum.innerHTML += num;
    }
}

function zeroFunc() { numberInput('0'); }
function oneFunc() { numberInput('1'); }
function twoFunc() { numberInput('2'); }
function threeFunc() { numberInput('3'); }
function fourFunc() { numberInput('4'); }
function fiveFunc() { numberInput('5'); }
function sixFunc() { numberInput('6'); }
function sevenFunc() { numberInput('7'); }
function eightFunc() { numberInput('8'); }
function nineFunc() { numberInput('9'); }

// Dot function with advanced validation
function dotFunc() {
    const currentInput = inputNum.innerHTML;
    
    // Check if last segment doesn't already contain a dot
    const lastSegment = currentInput.split(/[+\-*/%)]/);
    const lastSegmentStr = lastSegment[lastSegment.length - 1];
    
    if (!lastSegmentStr.includes('.')) {
        // If input is empty or ends with an operator, add '0.'
        if (currentInput === '' || ['+', '-', '*', '/', '%', '('].includes(currentInput.slice(-1))) {
            inputNum.innerHTML += '0.';
        } else {
            inputNum.innerHTML += '.';
        }
    }
}

// Operator functions with advanced input handling
function additionFunc() {
    const lastChar = inputNum.innerHTML.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    // Replace last operator or add if valid
    if (operators.includes(lastChar)) {
        inputNum.innerHTML = inputNum.innerHTML.slice(0, -1) + '+';
    } else if (lastChar !== '(' && inputNum.innerHTML !== '') {
        inputNum.innerHTML += '+';
    }
}

function substractionFunc() {
    const lastChar = inputNum.innerHTML.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    // Handle negative number and operator replacement
    if (operators.includes(lastChar)) {
        inputNum.innerHTML = inputNum.innerHTML.slice(0, -1) + '-';
    } else if (lastChar !== '(' && inputNum.innerHTML !== '') {
        inputNum.innerHTML += '-';
    }
}

function multiplicationFunc() {
    const lastChar = inputNum.innerHTML.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    // Allow multiplication after number or closing parenthesis
    if (lastChar.match(/[0-9\)]/) || (!operators.includes(lastChar) && inputNum.innerHTML !== '')) {
        inputNum.innerHTML += '*';
    }
}

function devideFunc() {
    const lastChar = inputNum.innerHTML.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    // Allow division after number or closing parenthesis
    if (lastChar.match(/[0-9\)]/) || (!operators.includes(lastChar) && inputNum.innerHTML !== '')) {
        inputNum.innerHTML += '/';
    }
}

function remainderFucn() {
    const lastChar = inputNum.innerHTML.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    // Allow remainder after number or closing parenthesis
    if (lastChar.match(/[0-9\)]/) || (!operators.includes(lastChar) && inputNum.innerHTML !== '')) {
        inputNum.innerHTML += '%';
    }
}

// Parentheses functions
function parenthesesLeftFunc() {
    const lastChar = inputNum.innerHTML.slice(-1);
    const operators = ['+', '-', '*', '/', '%', '('];
    
    // Allow open parenthesis after operators or at start
    if (lastChar === '' || operators.includes(lastChar)) {
        inputNum.innerHTML += '(';
    }
}

function parenthesesRightFunc() {
    const lastChar = inputNum.innerHTML.slice(-1);
    const openCount = (inputNum.innerHTML.match(/\(/g) || []).length;
    const closeCount = (inputNum.innerHTML.match(/\)/g) || []).length;
    
    // Allow closing parenthesis if more open than close and after number
    if (lastChar.match(/[0-9\)]/) && openCount > closeCount) {
        inputNum.innerHTML += ')';
    }
}

// Final answer with comprehensive error handling
function finalAnswer() {
    try {
        const input = inputNum.innerHTML;
        if (input.trim() === '') return;
        
        // Validate parentheses
        const openCount = (input.match(/\(/g) || []).length;
        const closeCount = (input.match(/\)/g) || []).length;
        if (openCount !== closeCount) {
            outputNum.innerHTML = 'Parentheses Error';
            return;
        }
        
        // Evaluate and round result
        const result = eval(input);
        outputNum.innerHTML = Number(result.toFixed(10));
    } catch (error) {
        outputNum.innerHTML = 'Error';
    }
}

// Delete last input
function deleteInput() {
    inputNum.innerHTML = inputNum.innerHTML.slice(0, -1);
}

// Clear all inputs
function clearAll() {
    inputNum.innerHTML = '';
    outputNum.innerHTML = '';
}

// Time, Day, and Date update function (existing code)
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

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// GitHub link for Next Day icon
var youtubeIcon = document.getElementById("nextDay");
youtubeIcon.addEventListener("click", function () {
    window.open("https://github.com/mdanassaif/", "_blank");
});