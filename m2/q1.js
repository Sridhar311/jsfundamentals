// Explain == vs === with examples
//== is a loose comparision operator it compares two values does not bother about the type of that value
console.log(5=="5")//true
//=== is strict comparision operator it compares two values along with its type
console.log(5==="5")//false  
console.log(null==undefined)//returns true
console.log(null===undefined) //false
// ==  → "Are they equal after conversion?"
// === → "Are they exactly equal without conversion?"
console.log([1,2]=="1,2")