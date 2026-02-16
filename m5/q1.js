// Remove duplicate values from array
var arr=[1,2,3,4,2,1,324,5,2,4,5];
// console.log(... new Set(arr));

//using filter +index()
var neww=arr.filter((element,index,arr)=>{
    if(arr.indexOf(element)==index){ //indexOf returns the first occurence of the element if it equals our current index we can include it
        return true
    }
    return false;
})
// console.log(neww);
//using reduce
var uniq=arr.reduce((acc,curr)=>{
    if(!acc.includes(curr)){
        acc.push(curr);
    }
    return acc;

},[]);
console.log(uniq);
