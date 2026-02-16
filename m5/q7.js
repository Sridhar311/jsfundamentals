// Merge two sorted arrays into one sorted array
let arr1=[1,2,3,6,8,11]
let arr2=[4,5,7,9,10]
function merge(l1,l2){
    let result=[];
    let i=0,j=0;
    while(i<l1.length && j<l2.length){
        if(l1[i]<l2[j]){
            result.push(l1[i]);
            i+=1;
        }
        else{
            result.push(l2[j]);
            j+=1
        }
    }
    while(i<l1.length) result.push(l1[i++]);
    while(j<l2.length) result.push(l2[j++]);
    return result
}
let res=merge(arr1,arr2)
console.log(res);

//method2
let result=[...arr1,...arr2].sort((a,b)=>a-b);
console.log(result)