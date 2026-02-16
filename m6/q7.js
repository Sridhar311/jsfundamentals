// Implement object inheritance using prototypes
let person={
    greet: function(){
        console.log(`Hello ${this.name} how was your day`);
    }
}
let obj=Object.create(person); //obj inherits the person
obj.name="Sridhar";
obj.greet();
