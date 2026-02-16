//Rest parameters (...args)
function sm(...args){
    let sum=0;
    for(let val of args){
        sum+=val;
    }
    return sum
}
console.log(sm(1,2,3,4,5))
console.log(sm(2,3))
//rest parameters helps us to get any number of parameters

function extraction([first,second,...args]){
    console.log("First : "+first);
    console.log("Second : "+second);
    console.log("Remaining : "+args);
}
extraction(["a","b","c","d","e","f","g","h","i"]);

//dealing objects with rest parameter

let person={name:"Sridhar",age:20,address:{city:"NY"}};
let {name,...bio}=person;
console.log(name);
console.log(bio);

//function currying
function add(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = add(5);   // `a` is set to 5
console.log(add5(3));   // `b` is 3, so 5 + 3 = 8

//Immediately invoked function expression
(function (a,b){
    console.log(a+b);
})(3,25);