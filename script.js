// Operation functions
function add(a, b) { return a + b; };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return a / b };

let num1, num2, op;
function operate(num1, num2, op) { };
const container = document.querySelector(".container");
const buttons = document.createElement('div');
const display = document.createElement('div');
buttons.setAttribute('class', 'buttons');
display.setAttribute('class', 'display');
container.appendChild(display);
container.appendChild(buttons);
// Create Display


// Create Buttons
for (i = 0; i < 19; i++) {
    const key = document.createElement('button');
    key.setAttribute("class", "btn");
    buttons.appendChild(key);
}