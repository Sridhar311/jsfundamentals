// Replace all occurrences of a character in a string
var str="Banananana";
console.log(str.split("a").join("o"));
console.log(str.replaceAll("a","o"));
str="BanAnana"
console.log(str.replace(/a/g,"o"));//BonAnona
console.log(str.replace(/a/gi,"0"));//Bononono
var str = "www.example.com";
console.log(str.replaceAll(".","/"));

var str="S r i d h a r"
console.log(str.replace(/\s/g, ""));

var str="Hi how are you my friend i am fine";
console.log(str.split("o").length-1)//occurance of a character in a string
let char="h";
console.log(str.toLowerCase().split(char).length-1);

var str="Banananan";
var s=new Set();
var res="";
for(let char of str){
    if(!s.has(char)){
        res+=char;
    }
    s.add(char);
}
console.log(res);
console.log([... new Set(str)].join(""));

var str="I love javascript programming ";
var words=str.split(" ");
var longest="";
for(let word of words){
    if(word.length>longest.length){
        longest=word;
    }
}
console.log(longest);

var str = "hello-world-example";
var words=str.split("-");
var res=words.map((word,index)=>{
    if(index==0){
        return word
    }
    return word.charAt(0).toUpperCase()+word.slice(1)
}).join("");
console.log(res);