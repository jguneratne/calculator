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
        
        if(this.firstOperand !== '') {
            this.displayValue = this.firstOperand;
        } else if (this.operator !== undefined) {
            this.displayValue = this.nextOperand;
        }
        
        screen.textContent = this.displayValue.toString().slice(0, 16);
        
        
        return this;
    },


    appendDigit: function(num) {
        
            if(this.displayValue === '0' || this.displayValue === 0) {
                this.firstOperand = num;
            } else {
                this.firstOperand = this.firstOperand + num;
            };

            console.log(this.firstOperand);

        
        return this;
    },


    addDecimal: function(point) {
        if (this.displayValue === this.firstOperand || this.displayValue === this.nextOperand) {
            this.displayValue = '0';
            this.displayValue += point;
        } else if(!this.displayValue.includes(point)) {
            this.displayValue += point;
        }
        return this;
    },


    undo: function() {
        if(this.displayValue === '0'|| this.displayValue === 0) {
            return;
        } else {
            this.displayValue = this.displayValue.toString().slice(0, -1);
        }

        return this;
    },


    operation: function(op) {

        if(this.firstOperand !== '') {
            this.operator = op;
            this.nextOperand = this.firstOperand;
            this.firstOperand = '';
         } else if (this.operator !== undefined) {
            this.equals(this.operator);
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
 
        //this.displayValue = this.result.toString();
        this.firstOperand = parseFloat(this.result);  
        this.nextOperand = '';


        // console.log(this.firstOperand);
        // console.log(this.nextOperand);
        
        return this;
    },


    equals: function(eql) {

        if (this.firstOperand !== '' && this.nextOperand !== undefined) {
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