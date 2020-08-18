let object = {
    name: "abul",
    age: 15,
};
object = {
    name: "abul",
    age: 15,
    zilla: "bogra",
};
console.log(object);

const packageName = require("packageName");

export const functionName = (params) => {};

console.log(Number.isNaN("blabla"));

var name;
console.log(name);
name = "fuad";
console.log(name);

var name;
name = function() {
    console.log("Hello I am Fuad");
};

name();

function sayName() {
    console.log("My name is Fuad");
}

function sayAge() {
    console.log("My age is 23");
}

function sayAll() {
    sayName();
    sayAge();
}

sayAll();
console.log('final');

// IIFE(Immediately Invoked Function)
(function() {
    console.log("hello");
})();

// name();
console.log("there");

const name;
// console.log(name);
name = "khan";
console.log(name);