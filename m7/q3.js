//Return multiple values from function
function arith(a,b){
    const add=a+b;
    const sub=a-b;
    const mult=a*b;
    return [add,sub,mult]
}
console.log(arith(8,2))

//if we return multiple elements without brackets it only returns the last element
//returning object from ffunction
function getuser(){
    return {
        name:"Sridhar",
        age:20,
        address:{city:"NY",pincode:202}
    }
}
const user=getuser();
console.log(user)