// Spread Operator
const array1 = ["apple", "orange", "mango"];
const array2 = [12, 14, 5, 45];

const addArray = [...array1, ...array2];
console.log(addArray);

// Finding the maximum value from an array
const addArray = [12, 10, 81, 5, 23, 32];
const arrayMax = Math.max(...addArray);
console.log(arrayMax);

// Alternative way
const arr = [12, 10, 81, 5, 23, 32];
const arrMax = Math.max.apply(null, arr);
console.log(arrMax);

// spread operator
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
const newArray = [...alphabet];
console.log(newArray);