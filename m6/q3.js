// Deep merge two objects recursively
let var1={name:"John",hobbies:"Reading"}
let var2={age:30,address:{city:"NY",pincode:3242}}
function isobject(obj){
    return obj && typeof obj=="object" && !Array.isArray(obj);
}
function deepmerge(target,source){
    for(let key in source){
        if(isobject(source[key])){
            if(!target[key] || !isobject(target[key])){
                target[key]={};
            }
            deepmerge(target[key],source[key]);
        }
        else{
            target[key]=source[key];
        }
    }
    return target
}
let merged=deepmerge(var1,var2);
console.log(merged)