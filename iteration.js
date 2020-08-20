// const obj = {
//     anotherObj: {
//         name: ["filip", "joseph", "david"],
//         age: [45, 55, 35],
//         year: [2013, 2015, 2016],
//     },
// };

// const arr = Object.entries(obj.anotherObj);
// const arr2 = { book: ["novel", "scienceFiction", "poetry"] };
// const output = arr.unshift(arr2);
// console.log(output);

// // loop through
// for (i = 0; i < output.length; i++) {
//     console.log(output[i]);
// }

// // Using for of
// const stringReverse = (str) => {
//     let reversed = "";
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// };
// console.log(stringReverse("fuad"));

// using for loop
// const stringReverse = (str) => {
//     let reversed = "";
//     for (let i = 0; i < str.length; i++) {
//         reversed = str.charAt(i) + reversed; //charAt() defines the character index in a string, here i is the index
//         console.log(str.charAt(i));
//     }
//     // return reversed;
// };
// stringReverse("fuad");
// console.log(stringReverse("fuad"));
// console.log("f" + "u" + "a" + "d");

const obj = {
    user1: [{ name: "roger" }, { age: 30 }, { book: "pleasure" }],
    user2: [{ name: "david" }, { age: 20 }, { book: "depression" }],
};
// now i have to find out roger from this object
console.log(obj.user1[0].name); //output is an array