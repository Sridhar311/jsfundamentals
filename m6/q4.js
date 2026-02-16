// Group array of objects by property value
const items=[
    {name:"Apple",type:"fruit"},
    {name:"onion",type:"vegetable"},
    {name:"Banana",type:"fruit"}
];
const grouped=items.reduce((acc,curr)=>{
    const key=curr.type;
    if(!acc[key]){
        acc[key]=[];
    }
    acc[key].push(curr);
    return acc;
},{});
console.log(JSON.stringify(grouped, null, 2));
