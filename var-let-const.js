function practice() {
    // let a = 3;
    if (true) {
        let a = 4;
        console.log("value: " + a);
    }
    // console.log("value: " + a);
}
practice();

// loop through
let i = 10;
for (let i = 0; i < 5; i++) {
    //we can reassign in case of var and let but not const
    console.log(i);
}
console.log("Value: " + i);

var i = 10;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Value: " + i);