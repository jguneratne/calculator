// Global Variables: 
const buttons = document.querySelectorAll('.btns'); // Need to use forEach to add event listener, because cannot add it to node list returned by querySelectorAll
const screen = document.querySelector('.screen');

// Calculator Object: 
const calculator = {
    displayValue: '0', 
    firstOperand: null, 
    nextOperand: false, 
    operator: null,

    updateScreen: function() {
        screen.textContent = this.displayValue;
    },

    appendDigit: function(num) {
        if(screen.textContent === '0') {
            this.displayValue += num;
        } else {
            this.displayValue += num;
        }
    },
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


// Event Listeners

buttons.forEach(button => {
    button.addEventListener('pointerdown', function(e) {

        const {target} = e;

        if(!e.target.matches('.btns')) {
            return;
        } else if (e.target.matches('.btn-num')) {
            calculator.appendDigit(target.dataset.value);   
            calculator.updateScreen();
        } else if (e.target.matches('.btn-dec')) {
            console.log(target.dataset.value);
        } else if (e.target.matches('.btn-op')) {
            console.log(target.dataset.value)
        } else if (e.target.matches('.btn-clear')) {
            console.log(target.dataset.value);
        }
        
    });
});

document.addEventListener('keydown', function(e) {
        if((e.key === '1') || (e.key ===  '2') || (e.key ===  '3') || (e.key ===  '4') || (e.key === '5') || (e.key === '6') || (e.key === '7') || (e.key === '8') || (e.key === '9') || (e.key === '0')) {
            calculator.appendDigit(e.key);   
            calculator.updateScreen();
        } else if ((e.key === '+') || (e.key === '-') || (e.key === '*') || (e.key === '/')) {
            console.log(e.key);
        } else if ((e.key === 'Enter')) {
            console.log(e.key);
        } else if ((e.key === 'Backspace')) {
            console.log(e.key);
        } else {
            return;
        }
});


// Method Calls

calculator.updateScreen();
