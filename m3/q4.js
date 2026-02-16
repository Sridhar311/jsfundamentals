// Extract substring using slice(), substring(), and substr()
var str="Hi how are you? how was your day";
//slice()
console.log(str.slice(3));//how are you? how was your day
console.log(str.slice(3,7));//how
console.log(str.slice(-9));//your day
//substring()
console.log(str.substring(3,8));//how a
console.log(str.substring(-3,2));//Hi ->Negative index is treated as 0
//substr()
//syntax ->str.substr(start,length);
console.log(str.substr(3,3));//how
var str="Frontend";
console.log(str.substr(-4)); //last four characters is retreived
var str="Programming";
console.log(str.substring(7,3));//gram->if start endex greater than the end index it gets swapped
var str="Javasript";
console.log(str.substr(-4,2));//ri
console.log(str.slice(-4,-1))//rip
console.log(str.slice(5,2));//not accepted in slice
console.log(str.substring(5,2));//it is accepted due to swapping
