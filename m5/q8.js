let arr=[1,1,2,2,2,4,3,3,2,4,2,6];
let freq={}
for(let ele of arr){
    if(freq[ele]){
        freq[ele]+=1
    }
    else{
        freq[ele]=1;
    }
}
console.log(freq)

//method 2
let fre=arr.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1;
    return acc;
},{});
console.log(fre);
