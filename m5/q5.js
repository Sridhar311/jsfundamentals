// Rotate array left/right by k positions
var arr=[1,2,3,4,5,6,7,8,9]
var k=3;
reverse(arr,0,arr.length-1);
reverse(arr,0,k-1);
reverse(arr,k,arr.length-1);
function reverse(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
}
console.log(arr)

//method 2 using extra space
var result=[...arr.slice(0,arr.length-k),...arr.slice(-k)];
console.log(result)