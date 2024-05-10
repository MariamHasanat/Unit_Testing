function calc(num1, operator, num2) {
    let result;
    let number1 = Number(num1);
    let number2 = Number(num2);
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                throw Error('Division by zero');
            } else {
                result = number1 / number2;
            }
            return result; 

        default:
            break;
    }
}

console.log('enter number');

calc(exp);