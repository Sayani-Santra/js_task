
console.log("connected");

const user = {
    name: "raju",
    age: 26,
     statu: false,
    salary: 50000
};

const token = "dfkhdfafkjbeqiufbqekjfieuqfe";

localStorage.setItem("token", token);
localStorage.setItem("user", JSON.stringify(user));

// Get data from localStorage
const user1 = JSON.parse(localStorage.getItem("user"));

console.log(user1);

// Display data in browser
document.getElementById("userContainer").innerHTML = `
    <h2>User Details</h2>
    <p>Name: ${user1.name}</p>
    <p>Age: ${user1.age}</p>
      <p>Status: ${user1.statu}</p>
     <p>Salary: ${user1.salary}</p>
`;

// Remove data
// localStorage.removeItem("token");
// localStorage.removeItem("user");
