// Explain difference between var, let, and const with examples
//var:
var a=10;
console.log(a);
var a="Sridhar";
console.log(a);
// var can be re assigned ,function scoped
console.log(b);
var b=15;
//variables declared as var is hoisted with intialized as undefined
//let:
let a=10;
console.log(a);
// let a="sridhar";//it will throws an error redeclaration is not allowed
console.log(a);
//let is block scoped,cannot be redeclared but can be updated
//const:
/*const a=10;
console.log(a);
const a=5;
console.log(a)
//const is not allowed to redeclare and updated*/
// | Feature                  | `var`                         | `let`                                  |
// | ------------------------ | ----------------------------- | -------------------------------------- |
// | Scope                    | Function-scoped               | Block-scoped                           |
// | Closure in loops         | All iterations share same `i` | Each iteration gets its own `i`        |
// | `setTimeout` inside loop | Prints **last value**         | Prints **correct value per iteration** |

//after that one second the loop has done its iteration as var is function scoped->i=3 is the value remembered
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
//let is a block scoped  so it gets its own copy of i for each iteration

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

