// Global Variables:
const buttons = document.querySelectorAll('.btns'); // Need to use forEach to add event listener, because cannot add it to node list returned by querySelectorAll
const screen = document.querySelector('.screen');

// Calculator Object:

const calculator = {
    displayValue: '0',
    firstOperand: '',
    operatorCheck: false,
    nextOperand: '',
    result: '',
    operator: undefined,
    operatorTwo: undefined,


    updateScreen: function() {
        screen.textContent = this.displayValue.toString();

        return this;
    },


    appendDigit: function(num) {
        
            //Logic to append numbers as they're typed
            if(this.displayValue === '0' || this.displayValue === 0) {
                this.displayValue = num;
            } else {
                this.displayValue = this.displayValue + num;
            };

            // Logic to handle nextOperand
            if(this.firstOperand !== '' && this.operatorCheck === true) {
                this.displayValue = num;
                this.operatorCheck = false;
                this.nextOperand = parseFloat(this.displayValue);
            }
        
        return this;
    },


    addDecimal: function(point) {
        if(!this.displayValue.includes(point)) {
            this.displayValue.toString() += point;
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

        this.operator = op;

        if(this.operator !== undefined) {
            this.firstOperand = parseFloat(this.displayValue);
            this.operatorCheck = true;
        } 

        return this;
    },


    calculation: function(nextOp) {
        if(nextOp == '+' || nextOp == '-' || nextOp == '*' || nextOp == '/' ) {
            this.operator = nextOp

                // console.log(this.firstOperand);
                // console.log(this.operatorCheck);
                // console.log(this.operator);

        } else {
                // console.log(this.nextOperand);
                // console.log(this.operator);

                switch (this.operator) {
                    case "+":
                        this.result = parseFloat(this.firstOperand) + parseFloat(this.nextOperand);
                        this.firstOperand = parseFloat(this.result);
                        this.nextOperand = '';
                        this.displayValue = this.firstOperand.toString();
                        break;
        
                    case "-":
                        this.result = parseFloat(this.firstOperand) - parseFloat(this.nextOperand);
                        this.firstOperand = parseFloat(this.result);
                        this.nextOperand = '';
                        this.displayValue = this.firstOperand.toString();
                        break;
        
                    case "*":
                        this.result = parseFloat(this.firstOperand) * parseFloat(this.nextOperand);
                        this.firstOperand = parseFloat(this.result);
                        this.nextOperand = '';
                        this.displayValue = this.firstOperand.toString();
                        break;
        
                    case "/":
                        if(this.nextOperand === '0') {
                            this.displayValue = "ERR";
                        } else {
                            this.result = parseFloat(this.firstOperand) / parseFloat(this.nextOperand);
                            this.firstOperand = parseFloat(this.result);
                            this.nextOperand = '';
                            this.displayValue = this.firstOperand.toString();
                        }

                        break;
                    }

        }
        
        return this;
    },

    equals: function(eql) {
        this.calculation();

        return this; 
    },


    secondCalculation: function(op) {
        this.operatorTwo = op; 
                console.log(operatorTwo);

        if ((this.result !== '') && (this.operatorTwo === '+' || this.operatorTwo === '- ' || this.operatorTwo === '*' || this.operatorTwo === '/')) {
                this.firstOperand = parseFloat(this.calculation(this.result));
                    console.log(this.firstOperand);
                this.displayValue = this.firstOperand.toString();
                this.operatorCheck = true;
                    console.log(this.operatorCheck);
                this.nextOperand = parseFloat(this.displayValue);
                    console.log(this.nextOperand);
            } 

            return this;
    },


    resetScreen: function() {
        this.displayValue = '0';
        this.firstOperand = '';
        this.operatorCheck = false;
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
            calculator.operation(target.dataset.value).calculation(target.dataset.value).secondCalculation(target.dataset.value).updateScreen();
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
            calculator.operation(e.key).calculation(e.key).secondCalculation(e.key).updateScreen();
        } else if ((e.key === 'Enter')) {
            calculator.equals(e.key).updateScreen();
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