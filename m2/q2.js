// What is the nullish coalescing operator (??)? When to use it over ||?
//SYNTAX: value1??value2
//if value1 is null or undefined return value 2 else return value 1
const name1=null;
const name2="Sridhar"
console.log(name1??name2);//sridhar
console.log("H"??name2); //return H

//  " ?? " it consider only the null and undefined as empty
// " || " it consider all the falsy value as empty
const age=0;
console.log(age||18);//18 it treats 0 as empty because it is falsy values;
console.log(age??18);//0

//use case
function setsomething(value){
    value=value??50;
    console.log(value);
}
setsomething(null)//50
setsomething(0)//0

function setanything(value){
    value=value||50;
    console.log(value);
}
setanything(0)//50
setanything(null)//50

console.log(null ?? "A"); //A 
console.log(undefined ?? "B"); // B
console.log(0 ?? 100); //0
console.log("" ?? "default"); //""
console.log(false ?? true); //false

console.log(0 || 10);//10
console.log(0 ?? 10); //0
console.log("" || "empty"); //empty
console.log("" ?? "empty"); //""
