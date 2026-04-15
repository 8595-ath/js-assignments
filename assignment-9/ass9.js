// 1. let, const, var
function variableDemo() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a, b, c);
}
variableDemo();


// 2. second fruit
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit(arr) {
    return arr[1];
}
console.log(getSecondFruit(fruits));


// 3. push & pop
function modifyArray(arr) {
    arr.push("NewFruit");
    arr.pop();
    return arr;
}
console.log(modifyArray(["Apple", "Banana"]));


// 4. map square
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers));


// 5. filter odd
function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(getOddNumbers(numbers));


// 6. object greeting
const person = {
    name: "Atharva",
    age: 22,
    occupation: "Student"
};

function greetPerson(p) {
    console.log(`Hello ${p.name}`);
}
greetPerson(person);


// 7. rectangle area
function getArea(obj) {
    return obj.width * obj.height;
}
console.log(getArea({ width: 10, height: 5 }));


// 8. object keys
function getKeys(obj) {
    return Object.keys(obj);
}
console.log(getKeys({ name: "Atharva", age: 22 }));


// 9. merge objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));


// 10. reduce sum
function getSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(getSum([1, 2, 3, 4, 5]));