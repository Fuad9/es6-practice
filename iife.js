(function iife() {
    var a = 2;
    console.log(a);
})();
console.log(a); //here is also a is not defined error. although here we use var instead of let

//es 6
{
    let a = 2;
    console.log(a);
}
console.log(a); //a is not defined