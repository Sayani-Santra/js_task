let cities = ["Kolkata", "Delhi", "Mumbai", "Chennai", "Bangalore"];

let totalCharacters = 0;

for (let city of cities) {
    console.log(city);

    totalCharacters = totalCharacters + city.length;
}

console.log("Total Number of Characters: " + totalCharacters);