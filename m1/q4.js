// Explain truthy and falsy values with 5 examples each
//There are exactly 7 falsy values in js
//false,NaN,"",null,undefined,0n
if (!false) console.log("false is falsy");
if (!0) console.log("0 is falsy");
if (!"") console.log('"" is falsy');
if (!null) console.log("null is falsy");
if (!undefined) console.log("undefined is falsy");
//Everything not falsy is truthy values
if ("hello") console.log('"hello" is truthy');
if (42) console.log('42 is truthy');
if ([]) console.log('[] is truthy');
if ({}) console.log('{} is truthy');
if (function(){}) console.log('function(){} is truthy');
//practice
if ("0") console.log("A");
if (0n) console.log("B");
if ([] == false) console.log("C");
if ({}) console.log("D");
if (NaN) console.log("E");
