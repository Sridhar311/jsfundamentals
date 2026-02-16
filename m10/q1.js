//fizz buzz problem
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//check prime
function isprime(num){
    if(num<=1) return false;
    if(num===2) return true;
    for(let i=2;i<num/2;i++){
        if(num%i==0) return false;
    }
    return true;
}
console.log(isprime(6))

//palindrome or not
function rev(num){
    var rem=0;
    while(num>0){
        var last=num%10
        rem=rem*10+last
        num=Math.floor(num/10);
    }
    return rem
}
var num=1221
if(num==rev(num))console.log("The number is palindrome");
else console.log("Not a palindrome");

//factorial
function factorial(num){
    if(num==0) return 1;
    return num*factorial(num-1);
}
console.log(factorial(5))

//fibonaci
function fibonaci(num){
    if(num<=1) return num;
    return fibonaci(num-1)+fibonaci(num-2);
}
var n=5;
for(let i=0;i<n;i++){
    console.log(fibonaci(i));
}

//vowel and consonant count in a string
var str="Sridhar";
var vow="aeiou"
var vcnt=0,ccnt=0
for(let char of str){
    if(vow.includes(char)) vcnt+=1;
    else ccnt+=1;
}
console.log("Vowels count:"+vcnt);
console.log("Consonant count:"+ccnt);

//anagram checker
var str1="eat",str2="ate";
var freq1={},freq2={};
for(let val of str1){
    if(!freq1[val]) freq1[val]=1;
    else freq1[val]+=1;
}
for(let val of str2){
    if(!freq2[val]) freq2[val]=1;
    else freq2[val]+=1;
}
var flag=true;
for(let key in freq1){
    if(!freq2[key]){
        flag=false;
        break
    } 
}
if(flag) console.log("The given two string is anagram");
else console.log("Not a anagram");

