// Global Variables: 
const buttons = document.querySelectorAll('.btns');
const screen = document.querySelector('.screen');
// Functions: 

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
    button.addEventListener('pointerdown', function(e){
        console.log(e);
    });
});

