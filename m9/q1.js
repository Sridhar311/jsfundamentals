//Destructuring arrays and objects;

//array
var arr=[1,2,43,4];
var [first,second,,last]=arr;
console.log(first,second,last);

//objects
var person={name:"sridhar",age:20,address:{city:"NY",pincode:101}}
var {name,address}=person;
console.log(name,address);

//spread operators for array and objects
//array
var arr=[1,2,4,5,6]
var arr2=[7,8,9,0];
var res=[...arr,...arr2];
console.log(res)
//objects
var obj1={name:"Sridhar"};
var obj2={age:20};
var person={...obj1,...obj2};
console.log(person)

//rest parameters in functions

function arith(a,b,...c){
    console.log(a+b);
    console.log(c);
}
arith(1,2,3,45,5,6);

//default function parameters
function bio(name,age,gender="Male"){
    console.log(name);
    console.log(age);
    console.log(gender);
}
bio("sridhar",20,"Male");
bio("Sridhar",20);

//arrow functions and this binding

var obj={
    greet:function(){ // this works here
        console.log(this.name);
    }
}
obj.name="Sridha";
obj.greet()

//but if i use a arrow function it wont work
//this inside arrow function does not refers to a object

var obj2={
    name:"Sridhar",
    greeet:()=>{
        console.log(this.name);
    }
}
obj2.greeet()//undefined