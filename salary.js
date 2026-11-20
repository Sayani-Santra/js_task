
let basicSalary = 20000;

// Calculate HRA, DA and Bonus
let hra = basicSalary * 20 / 100;
let da = basicSalary * 10 / 100;
let bonus = basicSalary * 5 / 100;

// Calculate Final Salary
let finalSalary = basicSalary + hra + da + bonus;

// Display Salary Breakdown
console.log("Basic Salary: ₹" + basicSalary);
console.log("HRA (20%): ₹" + hra);
console.log("DA (10%): ₹" + da);
console.log("Bonus (5%): ₹" + bonus);
console.log("-------------------------");
console.log("Final Salary: ₹" + finalSalary);
