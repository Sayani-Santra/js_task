
let num1 = 20;
let num2 = 10;
let operator = "+";

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        console.log("Addition:", result);
        break;

    case "-":
        result = num1 - num2;
        console.log("Subtraction:", result);
        break;

    case "*":
        result = num1 * num2;
        console.log("Multiplication:", result);
        break;

    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
            console.log("Division:", result);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid Operator");
}
