// Global Variables: 
const buttons = document.querySelectorAll('.btns'); // Need to use forEach to add event listener, because cannot add it to node list returned by querySelectorAll
const screen = document.querySelector('.screen');

// Calculator Object: 

const calculator = {
    displayValue: '0', 
    firstOperand: '', 
    nextOperand: '', 
    operator: undefined,

    updateScreen: function() {
        screen.textContent = this.displayValue;
        return this;
    },

    appendDigit: function(num) {
        this.displayValue = this.displayValue === '0' ? num : this.displayValue + num;
        return this;
    },

    addDecimal: function(point) {
        if(!this.displayValue.includes(point)) {
            this.displayValue += point;
        }
        return this;
    },

    operation: function(op) {

    },

    resetScreen: function() {
        this.displayValue = '0';
        this.firstOperand = '';
        this.nextOperand = '';
        this.operator = undefined;
        return this;
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
            calculator.appendDigit(target.dataset.value).updateScreen();   
        } else if (e.target.matches('.btn-dec')) {
            calculator.addDecimal(target.dataset.value).updateScreen();
        } else if (e.target.matches('.btn-op')) {
            console.log(target.dataset.value)
        } else if (e.target.matches('.btn-clear')) {
            calculator.resetScreen().updateScreen();
        }
        
    });
});

document.addEventListener('keydown', function(e) {
        if((e.key === '1') || (e.key ===  '2') || (e.key ===  '3') || (e.key ===  '4') || (e.key === '5') || (e.key === '6') || (e.key === '7') || (e.key === '8') || (e.key === '9') || (e.key === '0')) {
            calculator.appendDigit(e.key).updateScreen();   
        } else if (e.key === '.') {
            calculator.addDecimal(e.key).updateScreen();
        } else if ((e.key === '+') || (e.key === '-') || (e.key === '*') || (e.key === '/')) {
            console.log(e.key);
        } else if ((e.key === 'Enter')) {
            console.log(e.key);
        } else if ((e.key === 'Backspace')) {
            console.log(e.key);
        } else if ((e.key === 'd')) {
            calculator.resetScreen().updateScreen();
        } else {
            return;
        }
});


// Method Calls

calculator.updateScreen();
