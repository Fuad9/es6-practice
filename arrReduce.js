// // here is the example of array like object, even it worths saying that every single array is an object
// const person = [
//     { name: "david", age: 15 },
//     { name: "roger", age: 16 },
//     { name: "sally", age: 17 },
//     { name: "nail", age: 20 },
// ];
// console.log(person instanceof Object);

// To calculate sum in an array like object
const person = [
    { name: "david", age: 15 },
    { name: "roger", age: 16 },
    { name: "sally", age: 17 },
    { name: "nail", age: 20 },
];
const ageTotal = person.reduce((currentTotal, value) => {
    return value.age + currentTotal;
}, 0);
console.log(ageTotal);

// using for loop to calculate sum of age
const person = [
    { name: "david", age: 15 },
    { name: "roger", age: 16 },
    { name: "sally", age: 17 },
    { name: "nail", age: 20 },
];

const showAge = [];
for (let i = 0; i < person.length; i++) {
    const nameElement = person[i];
    const { age } = nameElement;
    showAge.push(age);
}
// console.log(showAge);
let totalAge = 0;
for (let j = 0; j < showAge.length; j++) {
    totalAge += showAge[j];
}
totalAge = showAge.reduce((a, b) => a + b);
console.log(totalAge);

// // sinple example
// const newArray = [1, 2, , 3, 4, 5, 6, 7];
// const total = newArray.reduce((a, b) => {
//     return a + b;
// });
// console.log(total);

// // another way out to find minimum number
// const arr = [1, 3, 4, 5, 6, 7];
// const min = arr.reduce((a, b) => {
//     return Math.min(a, b);
// });
// console.log(min);

// // without reduce method applying Math.min.apply
// const anotherArr = [12, 21, 4, 55, 10];
// const anotherMin = Math.min.apply(null, anotherArr); //I have to understand about null
// console.log(anotherMin);