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
    key.setAttribute("id", "button" + (i + 1));
    key.textContent = 18 - i;
    buttons.appendChild(key);
}

// Adding labels to buttons
const buttonLabels = ["CLEAR", "DELETE", "7", "8", "9", "%", "4", "5", "6", "X", "1", "2", "3", "_", ".", "0", "=", "+"];

for (let i = 0; i < buttonLabels.length; i++) {
    const button = document.getElementById("button" + (i + 1));
    button.textContent = buttonLabels[i];
}


// Create Display
