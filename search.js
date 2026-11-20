
let students = ["Sayani", "Rahul", "Amit", "Priya", "Riya"];

// Student name to search
let searchName = "Sayani";

// Search student
if (students.includes(searchName)) {
    console.log(searchName + " exists in the student list.");
}
else {
    console.log(searchName + " does not exist in the student list.");
}
