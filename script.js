// Global Variables: 
const buttons = document.querySelectorAll('.btns'); // Need to use forEach to add event listener, because cannot add it to node list returned by querySelectorAll
const screen = document.querySelector('.screen');

// Calculator Object: 

const calculator = {
    displayValue: '0', 
    firstOperand: '', 
    nextOperand: false, 
    operator: undefined,

    updateScreen: function() {
        toString(screen.textContent = this.displayValue);
        return this;
    },

    appendDigit: function(num) {
        if(this.displayValue === '0') {
            this.displayValue = num;
        } else {
            this.displayValue = this.displayValue + num;
        };
        
        return this;
    },

    addDecimal: function(point) {
        if(!this.displayValue.includes(point)) {
            this.displayValue += point;
        }
        return this;
    },

    undo: function() {
        this.displayValue = this.displayValue.toString().slice(0, -1);
        return this;
    },


    operation: function(op) {
        
        if(this.firstOperand === null || this.firstOperand === NaN || this.nextOperand === null || this.nextOperand === NaN || this.operator === 'undefined') {
            return
        }
    

    

        if (op === '+') {
            return this.firstOperand + this.nextOperand;
        } else if (op === '-') {
            return this.firstOperand - this.nextOperand;
        } else if (op === '*') {
            return this.firstOperand * this.nextOperand;
        } else if (op === '/') {
            return this.firstOperand / this.nextOperand;
        }
    
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
        } else if (e.target.matches('.btn-undo')) {
            calculator.undo().updateScreen();
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
            calculator.undo().updateScreen();
        } else if ((e.key === 'd')) {
            calculator.resetScreen().updateScreen();
        } else {
            return;
        }
});


// Method Calls

calculator.updateScreen(); 
