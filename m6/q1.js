// Create object using literal, constructor, and Object.create()

//using literals
let person={
    name:"Sridhar",
    age:20,
    greet: function(){
        console.log("Hello "+this.name);
    }
}
console.log(person);
person.greet();

//using constructor
let person1=new Object();
person1.name="Sridhar";
person1.age=20;
console.log(person1);

//using Object.create()
let person2=Object.create(null);
person2.name="Sriram";
person2.age=26;
console.log(person2)

//Check if property exists using in and hasOwnProperty()
if("name" in person){
    console.log(person.name);
}
if(person.hasOwnProperty("name")){
    console.log(person.name);
}
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person)[0])

// Merge objects using Object.assign() and spread operator
let resobject=Object.assign({},person,person2);
console.log(resobject)
let resultobjs={...person,...person2};
console.log(resultobjs);

//Seal object using Object.seal()
//used for sealing the object
//whch means we can modify the values of the exisithng properties
//but cant alter or dlete the number of properties
let person3={name:"Sridhar",age:21};
Object.seal(person3);
delete person3.name;//not dleted
