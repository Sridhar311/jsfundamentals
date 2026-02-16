// Demonstrate all comparison operators with edge cases
console.log(5 == "5");       // true (string -> number)
console.log(5 === "5");      // false (different types)

console.log(null == undefined);  // true (special case)
console.log(null === undefined); // false

console.log(0 == false);     // true (false -> 0)
console.log(0 === false);    // false

//edge cases
console.log([] == "");      // true ([] -> "" as string)
console.log([] == 0);       // true ([] -> 0 as number)
console.log([1] == 1);      // true ([1] -> "1" -> 1)
console.log([1,2] == "1,2"); // true ([1,2] -> "1,2")

console.log("2">"12") //true because 1 is lexicographically greater than 2



console.log(null>0) //false
console.log(null==0)//false
console.log(null>=0)//true
