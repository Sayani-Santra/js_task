let employee = {
    name: "Sayani",
    age: 22,
    department: "IT",
    salary: 25000
};

for (let key in employee) {
    console.log(key + " : " + employee[key]);
}