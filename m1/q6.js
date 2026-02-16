// What's the difference between null and undefined
console.log(typeof(null),typeof(undefined))//object undefined
//type of null is a object in js
let obj={}
console.log(obj.name);//undefined

function greet(name){
    return "Hello"+" "+name;
}
console.log(greet())  //missing parameters leads to undefined output
console.log(null==undefined)//returns true
console.log(null===undefined)//return false

let x;
let y = null;
console.log(x == y);
console.log(x === y);

function greet(name) {
  return name;
}
console.log(greet()); //undefined
console.log(greet(null)); //null

console.log(typeof(undefined)) //undefined
console.log(typeof(null)) //object
console.log(typeof(NaN)) //number
