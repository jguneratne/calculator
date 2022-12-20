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
        toString(screen.textContent = this.displayValue);
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
        
        if(this.firstOperand === NaN || this.nextOperand === NaN || this.operator === 'undefined') {
            return
        }
        
        parseFloat(this.firstOperand = this.displayValue);
            console.log(this.firstOperand);

        let add = function() {
            return this.firstOperand + this.nextOperand;
        };

        let sub = function() {
            return this.firstOperand - this.nextOperand;
        }; 

        let mult = function() {
            return this.firstOperand * this.nextOperand;
        };

        let div = function() {
            return this.firstOperand / this.nextOperand;
        };
    },

    resetScreen: function() {
        this.displayValue = '0';
        this.firstOperand = '';
        this.nextOperand = '';
        this.operator = undefined;
        return this;
    },
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
