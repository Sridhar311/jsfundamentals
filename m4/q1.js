// Create array in 3 different ways
var arr=[1,2,43,4]//1
console.log(arr);
var arr=new Array(1,2,3,4,5,6);
console.log(arr)
var arr=Array.of(1,2,4,34,6);
console.log(arr);
var str="sridhar"
var arr=Array.from(str);
console.log(arr);
var fruits=["apple","orange","mango"];
console.log(fruits);
delete fruits[1];//deletes the element but replaces that element with leaving a empty slot 
console.log(fruits)
//good way to delete
fruits.splice(0);
console.log(fruits);
var arrr=[1,2,3,4,6,7];
arrr.splice(4,0,5);
console.log(arrr);
arrr.shift()
console.log(arrr.length);
console.log(arrr.includes(5))
console.log(arrr.indexOf(3))

//Reverse an array without mutating original
var newarr=[...arrr].reverse()
console.log(arrr,newarr);
var newa=arrr.slice().reverse()
console.log(newa);
newa.sort()
console.log(newa)
var conarr=[...arrr,...newa];
console.log(conarr)
console.log(arrr.concat(newa));

var fruits=["apple","orange","mango","Banana"];
fruits.splice(1,0,"Grapes","Jackfruit");
console.log(fruits.toString())

fruits.fill("Grape",5,1);
console.log(fruits);

var ar=[1,3,4,5,[3,4,5]]
console.log(ar.flat())
ar=ar.flat();

ar.forEach((num,i)=>{
    console.log(i+":"+num);
})
console.log(ar)
var n1=ar.filter((num)=>num%2===0);
console.log(n1);
console.log(ar.reduce((acc,curr)=>acc+curr,0));
console.log(ar.find())