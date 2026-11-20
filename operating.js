
let num1 = 20;
let num2 = 10;
let operator = "+";
let result;

// Perform mathematical operation
if (operator === "+") {
    result = num1 + num2;
}
else if (operator === "-") {
    result = num1 - num2;
}
else if (operator === "*") {
    result = num1 * num2;
}
else if (operator === "/") {
    result = num1 / num2;
}
else if (operator === "%") {
    result = num1 % num2;
}
else {
    result = "Invalid operator";
}

// Display result
console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("Operator:", operator);
console.log("Result:", result);
