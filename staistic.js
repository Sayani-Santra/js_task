
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Calculate sum
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

// Calculate average
let average = sum / numbers.length;

// Find largest and smallest
let largest = numbers[0];
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }

    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

// Display results
console.log("Array:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);
