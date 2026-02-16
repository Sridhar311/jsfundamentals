// What is type coercion? Show implicit vs explicit conversion
//Tc->Javascript automatically or manually converts a value from one type to another type
//if it converts automatically it is implicit conversion
//if it converts manually it is explicit conversion

//implicit conversion
console.log(5+"5")//number ->string : 55
console.log(5-"5")//string->number :0
console.log(true+1)//bool->number :2
console.log("5"==5)//string->number :true
if("anystring"){
    console.log("Non empty");//"anything" this string is considered as true
} 

//explicit conversion
let a='123';
console.log(typeof(a)); //string
console.log(typeof(Number(a))); //number
console.log(String(123)) //123
console.log(Boolean([])); //true
console.log(false-2);//-2
console.log(10==="10")//false coz === strict comparision compare both values and type
console.log(typeof(NaN)); //number
