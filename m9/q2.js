//class and constructors
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}
const obj=new Person("John",20);
obj.greet()

//inheritance
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} is speaking`);
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    speak(){
        console.log(`${this.name} is barking`);
    }
}
const dog=new Dog("Rex","Labrador");
dog.speak()