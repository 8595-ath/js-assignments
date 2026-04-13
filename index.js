// ==============================
// Assignment 2 - JavaScript
// ==============================


// ✅ Q1: Print even numbers from 1 to 100
console.log("Q1: Even numbers from 1 to 100");
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}


// ==============================


// ✅ Q2: Calculator using switch
console.log("\nQ2: Calculator");

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;
        default:
            return "Invalid operator";
    }
}

// Test
console.log("Addition:", calculate(10, 5, '+'));
console.log("Subtraction:", calculate(10, 5, '-'));
console.log("Multiplication:", calculate(10, 5, '*'));
console.log("Division:", calculate(10, 5, '/'));


// ==============================


// ✅ Q3: Tax Calculation using switch
console.log("\nQ3: Tax Calculation");

function findTax(salary) {
    let tax = 0;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            return "Invalid salary";
    }

    return tax;
}

// Test
console.log("Salary 400000 Tax:", findTax(400000));
console.log("Salary 800000 Tax:", findTax(800000));
console.log("Salary 1200000 Tax:", findTax(1200000));
console.log("Salary 2000000 Tax:", findTax(2000000));


// ==============================


// ✅ Q4: Sum of products of corresponding digits
console.log("\nQ4: Sum of Products of Digits");

function sumOfProducts(n1, n2) {
    let sum = 0;

    while (n1 > 0 || n2 > 0) {
        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        sum += digit1 * digit2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

// Test
console.log("Result (6, 34):", sumOfProducts(6, 34));
console.log("Result (123, 456):", sumOfProducts(123, 456));


// ==============================
// END OF ASSIGNMENT 2
// ==============================