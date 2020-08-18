// default parameter
function name(name1, name2 = "hasan") {
    return name1 + " " + name2;
}
const addName = name("fuad");
console.log(addName);