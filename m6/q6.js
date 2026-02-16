// Convert object to array and vice versa
let person={name:"Sridhar",age:21,city:"NY"}
const values=Object.values(person)
console.log(values) //['Sridhar', 21, 'NY']
const pairs=Object.entries(person);
console.log(pairs[0]);

//array to objects
const obj=Object.fromEntries(pairs);
console.log(obj);

//Remove properties with null/undefined values
const person1 = {
  name: "John",
  age: null,
  country: "India",
  job: undefined
};
console.log(person1);
const after_removal=Object.fromEntries(
    Object.entries(person1).filter(([key,value])=>value!=null)
)
console.log(after_removal);


//Get nested property safely without errors
//optional chaining (?.) allow as to safely retrieve it without error
const person2={name:"Ram",age:20,address:{pincode:641502}};
console.log(person2.address?.city);//undefined returned safely without error


//Create object from dynamic keys and values
//multiple dynamic keys
let keys=["name","age","city"];
let valuess=["sridhar",20,"Coimbatore"];
const obj1={};
keys.forEach((value,index)=>{
    obj1[value]=valuess[index];
});
console.log(obj1);