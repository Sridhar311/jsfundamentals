// Find intersection of two arrays\
var arr1=[1,2,43,5,6,7,8];
var arr2=[5,6,7,8];
//using filter()+includes()
var res=arr1.filter((value)=>arr2.includes(value));
// console.log(res);

//using reduce()+includes()
var res=arr1.reduce((acc,curr)=>{
    if(arr2.includes(curr)){
        acc.push(curr);
    }
    return acc;
},[])
console.log(res);

// union of two arrays
var res=arr1.concat(arr2).reduce((acc,curr)=>{
    if(!acc.includes(curr)){
        acc.push(curr);
    }
    return acc;
},[]);
console.log(res);

// Find difference between two arrays
var diff=arr1.filter((value)=>!arr2.includes(value));
console.log(arr1,arr2)
console.log(diff);