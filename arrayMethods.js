// practice for reduce
const person = [
    { name: "brad", age: 30 },
    { name: "travis", age: 25 },
    { name: "devon", age: 35 },
];
const ageTotal = person.reduce((currentTotal, value) => {
    let total = currentTotal + value.age;
    return total;
}, 0);
console.log(ageTotal);

// using for loop
const person = [
    { name: "brad", age: 30 },
    { name: "travis", age: 25 },
    { name: "devon", age: 35 },
];
let showAge = [];
for (let i = 0; i < person.length; i++) {
    const element = person[i].age;
    showAge.push(element);
}
const totalAge = showAge.reduce((a, b) => {
    return a + b;
});
console.log(totalAge);

// forEach
person.forEach((values) => {
    console.log(values.age);
});

// map
const map = person.map((values) => {
    return values.age;
});
console.log(map);

// filter
const filter = person.filter((values) => {
    return values.age;
});
console.log(filter);

// find
const find = person.find((values) => {
    return values.age;
});
console.log(find);

// includes method is used to check if an element is included or excluded in an array
const mapTesting = person.map((values) => {
    return values.age;
});
const includesTesting = mapTesting.includes(35);
console.log(includesTesting);