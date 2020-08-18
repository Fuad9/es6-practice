// Spread Operator
const array1 = ["apple", "orange", "mango"];
const array2 = [12, 14, 5, 45];

const addArray = [...array1, ...array2];
console.log(addArray);

const a = 12;
const b = 10;
const c = 8;
const addArray = [12, 10, 8, 5, 23, 32];
const arrayMax = Math.max(...addArray);
console.log(isNaN(arrayMax));