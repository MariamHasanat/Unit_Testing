function calc(number1, operator, number2) {
    let result;
    if (((typeof number1) === "string") || ((typeof number1) === "string")) {
        throw Error("Invalid input type");
    }
    
    switch (operator) {
        case '+':
            result = number1 + number2;
            console.log(result);
            break;
        case '-':
            result = number1 - number2;
            console.log(result);
            break;
        case '*':
            result = number1 * number2;
            console.log(result);
            break;
        case '/':
            if (number2 === 0) {
                throw Error('Division by zero');
            } else {
                result = number1 / number2;
                console.log(result);
            }
            return result;

        default:
            throw Error('Invalid operator')
    }
}

calc(3, '+', 3.5);
calc(3, '-', 3.5);
calc(3, '*', 3.5);
calc(3, '/', 3.5);
calc(3, '$', 3.5);
calc('0', '+', 3.5);