
// Explain operator precedence with a complex expression
let result = 10 + 5 * 2 > 25 || false && !0;
console.log(result)//faslse

let x = 2 + 3 * 4 / 2 - 1;
console.log(x);//7  

let y = true || false && !false;
console.log(y);//true

let z = (0 ?? "default" )|| "fallback";
console.log(z)//"fallback"
