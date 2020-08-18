// arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const multiply = x * y;
    const result = sum / multiply;
    return result;
};

console.log(doMath(7, 5));

//Exceptional example where arrow function has no effect
const author = {
    name: "Jane Fox",
    title: "Frustration",
    year: "2013",
    speech: function() {
        setTimeout(() => {
            console.log(this.name + " wrote " + this.title + " in " + this.year);
        }, 1000);
    },
};
author.speech();