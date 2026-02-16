const people=[
    {
        name:"Alice",age:39
    },
    {
        name:"Sridhar",age:20
    },
    {
        name:"Bob",age:20
    },
    {
        name:"Antony",age:18
    }
]
people.sort((a,b)=>{
    if(a.age==b.age){
        a.name.localeCompare(b.name);
    }
    return a.age-b.age;
})
console.log(JSON.stringify(people, null, 2));
