var obj=[
    {name:"Banana",type:"fruit"},
    {name:"Onion",type:"vegetables"},
    {name:"Cucumber",type:"vegetables"},
    {name:"apple",type:"fruit"}
];
var grouped=obj.reduce((acc,curr)=>{
    if(!acc[curr.type]){
        acc[curr.type]=[];
    }
    acc[curr.type].push(curr);
    return acc;
},{});
console.log(JSON.stringify(grouped, null, 2));
var arr=[1,2,3,43,54,5,6,4,3,2,464]
var res=Math.max(...arr);
console.log(res);
//if we directly pass the array it does not accept Math.max requires series of numbers not array ->Math.max(1,2,3,4)
//if we pass Math.max([1,2,3,4])->NaN because array is not a number