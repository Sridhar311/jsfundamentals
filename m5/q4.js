//chunk array into smaller array of size
var arr=[1,2,3,4,5,6,7,8,9];
var result_array=(chunks(arr,3));
function chunks(arr,size){
    var res=[];
    for(let i=0;i<arr.length;i+=size){
        res.push(arr.slice(i,i+size));
    }
    return res;
}
console.log(result_array[2])