// ================= Q1 =================
console.log("\n--- Q1 ---");
const states = ["Maharashtra", "Odisha", "Assam", "Bihar", "Uttar Pradesh"];

const filteredStates = states.filter(state => 
  !/^[aeiou]/i.test(state)
);

console.log(filteredStates);


// ================= Q2 =================
console.log("\n--- Q2 ---");
let str2 = "I love my India";

let reversedSentence = str2.split(" ").reverse().join(" ");

console.log(reversedSentence);


// ================= Q3 =================
console.log("\n--- Q3 ---");
let str3 = "INDIA";
let arr3 = str3.split("");

arr3.splice(3, 0, "O", "N", "E", "S");

console.log(arr3.join(""));


// ================= Q4 =================
console.log("\n--- Q4 ---");
let str4 = "This is a sample string for testing purpose";

let vowels = 0;
let consonants = 0;

for (let char of str4.toLowerCase()) {
  if (/[aeiou]/.test(char)) vowels++;
  else if (/[a-z]/.test(char)) consonants++;
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


// ================= Q5 =================
console.log("\n--- Q5 ---");
function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

console.log(correctfn("I has a pen", "has", "have"));


// ================= Q6 =================
console.log("\n--- Q6 ---");

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let result6 = inputArr.filter(num => num > 5);

console.log(result6);

// ================= Q7 =================
console.log("\n--- Q7 ---");
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] }
];

const output7 = students.map(student => {
  let avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
  return { name: student.name, average: avg };
});

console.log(output7);


// ================= Q8 =================
console.log("\n--- Q8 ---");
function digitSum(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

console.log(digitSum(456));


// ================= Q9 =================
console.log("\n--- Q9 ---");
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

console.log(countWords("This is a test paragraph"));


// ================= Q10 =================
console.log("\n--- Q10 ---");
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));


// ================= Q11 =================
console.log("\n--- Q11 ---");
const data = {
  student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let result11 = {};

for (let student in data) {
  let scores = Object.values(data[student]);
  let avg = scores.reduce((a, b) => a + b, 0) / scores.length;

  result11[student] = { average: avg };
}

console.log(result11);