// Global Variables: 
const buttons = document.querySelectorAll('.btns'); // Need to use forEach to add event listener, because cannot add it to node list returned by querySelectorAll
const screen = document.querySelector('.screen');

// Calculator Object: 
const calculator = {
    displayValue: '0', 
    firstOperand: null, 
    nextOperand: false, 
    operator: null,
};


// Simple Operator Functions: 

function add(addNum1, addNum2) {
    return sum = addNum1 + addNum2;
}

function subtract(subNum1, subNum2) {
    return diff = subNum1 - subNum2;
};

function multiply(multNum1, multNum2) {
    return prod = multNum1 * multNum2;
};

function divide(divNum1, divNum2) {
    return quot = divNum1 / divNum2;
};

// Other Functions
function updateScreen() {
    screen.textContent = calculator.displayValue;
}


// Event Listeners

buttons.forEach(button => {
    button.addEventListener('pointerdown', function(e) {
        if(e.target.matches('#num9')) {
            screen.textContent = '9';
        } else if (e.target.matches('#num8')) {
            screen.textContent = '8';
        } else if (e.target.matches('#num7')) {
            screen.textContent = '7';
        }
    });
});


// Function Calls
updateScreen();