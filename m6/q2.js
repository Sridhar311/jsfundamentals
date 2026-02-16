//Clone object (shallow vs deep clone)
let obj1={name:"John",age:30,address:{city:"Mumbai"}};
let obj2={...obj1}
obj2.name="Alice"
console.log(obj2);//changed
console.log(obj1);//unchanged
obj2.address.city="Chennai";
console.log(obj2.address.city);//changed
console.log(obj1.address.city);//changed
//nested object shares their references

//deep copy
let obj3=structuredClone(obj1);
console.log(obj3);
obj3.name="Bob";
obj3.address.city="bangalore";
console.log(obj3)
console.log(obj3.address.city)
console.log(obj1.address.city)