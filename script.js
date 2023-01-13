// Global Variables:
const buttons = document.querySelectorAll('.btns'); // Need to use forEach to add event listener, because cannot add it to node list returned by querySelectorAll
const screen = document.querySelector('.screen');

// Calculator Object:

const calculator = {
    displayValue: '0',
    firstOperand: '',
    nextOperand: '',
    result: '',
    operator: undefined,


    updateScreen: function() {
        
        screen.textContent = this.displayValue.toString().slice(0, 16);
        
        return this;
    },


    appendDigit: function(num) {
        
        if(this.operator) {
            this.nextOperand += num;
            this.displayValue = this.nextOperand;
        } else {
            this.firstOperand += num;
            this.displayValue = this.firstOperand;
        };

        
        return this;
    },


    addDecimal: function(point) {
     if(!this.firstOperand.includes(point)) {
            this.firstOperand += point;
        } else if(!this.nextOperand.includes(point)) {
            this.nextOperand += point;
        } 

        return this;
    },


    undo: function() {
        if (this.firstOperand) {
            this.firstOperand = this.firstOperand.toString().slice(0, -1);
            this.displayValue = this.firstOperand;
        } else if (this.nextOperand) {
            this.nextOperand = this.nextOperand.toString().slice(0, -1);
            this.displayValue = this.firstOperand;
        }

        return this;
    },


    operation: function(op) {
      
        if (!this.operator) {
            this.operator = op;
        } else if (!this.nextOperand) {
                this.operator = op;
        } else if (this.firstOperand && this.operator && this.nextOperand) {
            this.equals();
            this.operator = op;
         } 
         
        return this;
    },


    calculation: function() {

        switch (this.operator) {
            case "+":
                this.result = parseFloat(this.firstOperand) + parseFloat(this.nextOperand);
                break;

            case "-":
                this.result = parseFloat(this.firstOperand) - parseFloat(this.nextOperand);
                break;

            case "*":
                this.result = parseFloat(this.firstOperand) * parseFloat(this.nextOperand);
                break;

            case "/":
                if(this.nextOperand === '0' || this.nextOperand === 0) {
                    this.result = "ERR";
                    this.displayValue = this.result;
                } else {
                    this.result = parseFloat(this.firstOperand) / parseFloat(this.nextOperand);
                }

                break;

            default: 
                return;
            }
 
        this.displayValue = this.result.toString();
        this.firstOperand = parseFloat(this.result);  
        this.nextOperand = '';
        
        return this;
    },


    equals: function(eql) {

        if (this.firstOperand && this.nextOperand) {
            this.calculation();
        }

        return this; 
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
            calculator.operation(target.dataset.value).updateScreen();
        } else if (e.target.matches('.btn-eql')) {
            calculator.equals(target.dataset.value).updateScreen();
        } else if (e.target.matches('.btn-clear')) {
            calculator.resetScreen().updateScreen();
        } else if (e.target.matches('.btn-undo')) {
            calculator.undo().updateScreen();
        }

    });
});


document.addEventListener('keydown', function(e) {
        if((e.key === '1') || (e.key === '2') || (e.key === '3') || (e.key === '4') || (e.key === '5') || (e.key === '6') || (e.key === '7') || (e.key === '8') || (e.key === '9') || (e.key === '0')) {
            calculator.appendDigit(e.key).updateScreen();
        } else if (e.key === '.') {
            calculator.addDecimal(e.key).updateScreen();
        } else if ((e.key === '+') || (e.key === '-') || (e.key === '*') || (e.key === '/')) {
            calculator.operation(e.key).updateScreen();
        } else if ((e.key === 'Enter') || (e.key === '=')) {
            calculator.equals(e.key).updateScreen();
        } else if ((e.key === 'Backspace')) {
            calculator.undo().updateScreen();
        } else if ((e.key === 'c')) {
            calculator.resetScreen().updateScreen();
        } else {
            return;
        }
});


// Method Calls

calculator.updateScreen();