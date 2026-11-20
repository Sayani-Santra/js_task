// Step 1: Create a user object
let user = {
    name: "Sayani",
    age: 22,
    city: "Kolkata",
    department: "IT"
};

// Step 2: Convert object into JSON string
let jsonString = JSON.stringify(user);

console.log("JSON String:");
console.log(jsonString);

// Step 3: Convert JSON string back into object
let newObject = JSON.parse(jsonString);

console.log("JavaScript Object:");
console.log(newObject);