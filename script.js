const calculator = (function(a, b){
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    return {
        add,
        subtract,
        multiply,
        divide
    };
})

const display = document.getElementById('displayInput');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent !== "C" && button.textContent !== "=" && button.textContent !== "←"){
            display.value += button.textContent;
        } else if(button.textContent === "C"){
            display.value = "";
        } else if(button.textContent === "←") {
            display.value = display.value.slice(0, -1);
        } else if(button.textContent === "="){
            const expression = display.value;
            const operator = expression.match(/[\+\-\*\/]/)[0];
            const numbers = expression.split(/[\+\-\*\/]/).map(Number);
            let result;

            switch(operator) {
                case '+':
                    result = calculator(numbers[0], numbers[1]).add(numbers[0], numbers[1]);
                    break;
                case '-':
                    result = calculator(numbers[0], numbers[1]).subtract(numbers[0], numbers[1]);
                    break;
                case '*':
                    result = calculator(numbers[0], numbers[1]).multiply(numbers[0], numbers[1]);
                    break;
                case '/':
                    result = calculator(numbers[0], numbers[1]).divide(numbers[0], numbers[1]);
                    break;
            }
            display.value = result;

        }
})})

