let studentName = "Aisha Bello";
let studentID = "ST001";
let age = 18;
let department = "Computer Science";

let subjects = [
    { name: "HTML", score: 85 },
    { name: "CSS", score: 78 },
    { name: "JavaScript", score: 92 },
    { name: "Git", score: 80 },
    { name: "UI/UX", score: 84 }
];

function calculateAverage() {
    let total = 0;

    for (let i = 0; i < subjects.length; i++) {
        total += subjects[i].score;
    }

    return total / subjects.length;
}
// Calculate average
let average = calculateAverage();

let grade;
let status;

if (average >= 90) {
    grade = "A";
} 
else if (average >= 80) {
    grade = "B";
} 
else if (average >= 70) {
    grade = "C";
} 
else if (average >= 60) {
    grade = "D";
} 
else {
    grade = "F";
}

if (average >= 50) {
    status = "PASS";
} 
else {
    status = "FAIL";
}


console.log("                     STUDENT REPORT CARD                 ");

console.log("Name:", studentName);
console.log("Student ID:", studentID);
console.log("Age:", age);
console.log("Department:", department);

console.log("Subjects:");

for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i].name + " - " + subjects[i].score);
}


console.log("Average:", average.toFixed(2));
console.log("Grade:", grade);
console.log("Status:", status);

if (status === "PASS") {
    console.log("Congratulations! You passed.");
} 
else {
    console.log("Unfortunately, you failed.");
}
let name = "Aisha";

console.log(name);
