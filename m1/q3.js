// Create variables of all primitive types and check their types using typeof
let a=25;
console.log(a,typeof(a));
let b="sridhar";
console.log(b,typeof(b));
let c=true;
console.log(c,typeof(c));
let d=null;
console.log(d,typeof(d));
let e=3456746568423674538476283746283746378264873264n;
console.log(e,typeof(e));
let str = "Hello";
str[0] = "h";
console.log(str);
let x=5;
let y="5";
console.log(y+x);//55 due to dual functionality of + operator int is converted into string
console.log(x-y);//0 - has no dual funcationality hence string is converted into int