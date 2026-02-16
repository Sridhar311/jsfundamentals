//function declaration
f1();
function f1(){
    console.log("Hello");
}
//function declaration are hoisted with the entire script

//functions expressions are functions assigned to a variable
const f2=function(){
    console.log("How are youy");
    
}
f2();

//immediately invoked function expression(IIFE)

(function(){
    console.log("This function is executed immediately after the declaration");
})();



// | Feature              | Regular Function                                                           | Arrow Function                                                               |
// | -------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
// | **Syntax**           | `function myFunction() {}`                                                 | `const myFunction = () => {}`                                                |
// | **`this` Binding**   | Has its own `this` bound at the time of call.                              | Inherits `this` from the surrounding context (lexical scoping).              |
// | **Arguments Object** | Has its own `arguments` object.                                            | Does not have its own `arguments` object.                                    |
// | **Hoisting**         | Hoisted, can be called before declaration.                                 | Not hoisted, must be declared before use.                                    |
// | **Use Case**         | Useful for methods, constructors, and when you need `this` or `arguments`. | Ideal for short functions, callbacks, and when `this` needs to be preserved. |
