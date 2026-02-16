// Conditional object property assignment
//like assigning a property to object only if a condition is met

const isAdmin=true;
const user={
    name:"John",
    ...(isAdmin&&{role:"admin"})
}
console.log(user)

//conditional object property assignment using ternary operator

const isAdmn=false;
const user1={
    name:"Alice",
    ...(isAdmn?{role:"admin"}:{role:"user"})
}
console.log(user1);

//Strategy pattern to replace switch
function calculate(a, b, operation) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}
console.log(calculate(4, 2, "multiply")); // 8
//hard to read
//strategy pattern with object
var obj={
    add:(a,b)=>a+b,
    substract:(a,b)=>a-b,
    multiply:(a,b)=>a*b,
    divide:(a,b)=>a/b
}
console.log(obj.add(3,5));
console.log(obj.substract(5,3));
console.log(obj.multiply(3,3));
console.log(obj.divide(5,2));