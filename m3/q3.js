// Convert string to uppercase/lowercase and capitalize first letter
let str="hi how are you my friend"
let res=str.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
console.log(res);

// for upper and lower just user str.toUpperCase() and str.toLowerCase()