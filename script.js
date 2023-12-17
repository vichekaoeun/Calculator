// Operation functions
function add(a, b) { return a + b; };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return a / b };

let num1, num2, op;
// Selection
function operation(num1, num2, op) {
    if (op === "add") {
        add(num1, num2);
    }
    else if (op === "subtract") {
        subtract(num1, num2);
    }
    else if (op === "multiply") {
        multiply(num1, num2);
    }
    else if (op === "divide") {
        divide(num1, num2);
    }
};

const container = document.querySelector(".container");
const buttons = document.createElement('div');
const display = document.createElement('div');
buttons.setAttribute('class', 'buttons');
display.setAttribute('class', 'display');
container.appendChild(display);
container.appendChild(buttons);

// Create Buttons
for (i = 0; i < 18; i++) {
    const key = document.createElement('button');
    key.setAttribute("class", "btn");
    key.textContent = 18 - i;
    buttons.appendChild(key);


}

// Create Display
