// object destructuring
const person = {
    name: "messi",
    phone: 1234,
    age: 34,
    address: { city: "cumilla", thana: "muradnagar" },
};
const { name: a = "neymer", age: b, address = "dhaka" } = person;

console.log(a, b, address);

// to access a property
const {
    address: { thana },
} = person;
console.log(thana);

// In a function
let getUser = (user) => {
    console.log(`user name is: ${user.name} and age is: ${user.age}`);
};
getUser(person);

// array destructuring and spread operator
// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const [x, , , z, ...rest] = alphabet;
// console.log(rest);

// spread operator
// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const newArray = [...alphabet];
// console.log(newArray);

// Mathematical operation in array
// const addMult = (a, b) => {
//     return [a + b, a * b];
// };
// const [sum, mult] = addMult(2, 3);
// console.log(sum, mult);