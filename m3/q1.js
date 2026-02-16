// Reverse a string using 3 different methods
var str="rahdirS"
//1:
console.log(str.split("").reverse().join(""))
//2:
var rev="";
for(let i=str.length-1;i>=0;i--){
    rev+=str[i];
}
console.log(rev);
//3:
var str="abcdefghijklmnopqrstuvwxyz"
let result=Array.from(str).reduce((rev,char)=>char+rev,"");
console.log(result);

function reverseString(s) {
  if (s === "") return "";
  return reverseString(s.slice(1)) + s[0];
}

console.log(reverseString("Hello")); 
