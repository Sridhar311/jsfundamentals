// What is hoisting? Demonstrate with code
//hoisting means javascript moves declaration to the top of their scope during the creation phase(before execution)
//variable declaration only hoisted not intializaiton ,function is fully hoisted
/*console.log(a);//undefined
var a=10;
// console.log(b);//reference errror
// let b=10;
//only var variables are hoisted and intialized with undefined .
// let and const are not
console.log(greet("sridhar"));
function greet(name){
    return "Hello"+" "+name;
}
//function is fully hoisted 

greett();//type error it is hoisted but not initialized 
var greett=function(){
    console.log("Hello");
}*/
// console.log(a)
// var a=5;
// console.log(a)
/*var a = 10;
function foo() {
  console.log(a);
  if (true) {
    var a = 20;
  }
  console.log(a);
}
foo();
*/
var a = 1;

function outer() {
  console.log(a);//undefined
  var a = 2;

  function inner() {
    console.log(a);//2
  }

  inner();
}

outer();
