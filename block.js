
console.log("===== VAR, LET AND CONST =====");

// 1. VAR example
var name = "Sayani";
var name = "Rahul"; // var allows redeclaration

console.log("Var:", name);

// 2. LET example
let age = 22;
age = 23; // let allows reassignment

console.log("Let:", age);

// 3. CONST example
const course = "JavaScript";
// course = "React"; // Error: Cannot reassign const

console.log("Const:", course);


// ===== BLOCK SCOPE =====

console.log("===== BLOCK SCOPE =====");

{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Inside block - var:", a);
    console.log("Inside block - let:", b);
    console.log("Inside block - const:", c);
}

console.log("Outside block - var:", a);

// let and const cannot be accessed outside the block
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError


// ===== FUNCTION SCOPE =====

console.log("===== FUNCTION SCOPE =====");

function demo() {
    var x = 100;
    let y = 200;
    const z = 300;

    console.log("Inside function - var:", x);
    console.log("Inside function - let:", y);
    console.log("Inside function - const:", z);
}

demo();

// Variables declared inside a function
// cannot be accessed outside it.

// console.log(x); // ReferenceError
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError
