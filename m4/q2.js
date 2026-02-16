//map using forEach
var arr=[1,2,3,4,5,6,76,8]
var doubled=custommap(arr,num=>num*2);
function custommap(arr,callback){
    var res=[];
    arr.forEach((element,index,arr)=>{
        res.push(callback(element,index,arr))
    })
    return res;
}
console.log(arr,doubled);

// Implement filter() using reduce()
var even=customfilter(arr,num=>num%2==0);
function customfilter(arr,callback){
    return arr.reduce((acc,element,index,arr)=>{
        if(callback(element,index,arr)){
            acc.push(element);
        }
        return acc;
    },[]);
}
console.log(even);