// Find second largest number in array
let arr=[10,2,43,65,32,434,23,55,23];
arr.sort((a,b)=>b-a)
console.log(arr[1])

//method2 
let maxi=Math.max(...arr);
let result=Math.max(...arr.filter((x)=>x!=maxi));
console.log(result);