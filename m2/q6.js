// Implement optional chaining (?.) in nested objects
//optional chaining helps to safely acess deeply nested properties without throwing an error if a object is null or undefined
//Eg:
const user={name:"Sridhar",age:"20",address:{city:"NY"}};
console.log(user.age);
const user2={name:"Srid"}
// console.log(user2.address.city)// error 
//hence we are using optional chaining

console.log(user?.address?.city);//NY
console.log(user2?.address?.city)//undefined
//this is the purpose of using optional  chaining without throwing error
//if the object has some values it returns it other wise it returns undefined instead of error


//optional chaining with arrays
const users = [
  { name: "Alice", pets: ["cat", "dog"] },
  { name: "Bob" }
];

console.log(users[0]?.pets[0]); // "cat"
// console.log(users[1]?.pets[0]); // undefined 

//optional chaining with nullish coalescion
const user3 = { name: "Bob" };

const city = user3?.address?.city ?? "Unknown City";
console.log(city); // "Unknown City"

let a=0||""||false||""
console.log(a)