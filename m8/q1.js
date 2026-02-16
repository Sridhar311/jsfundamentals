//Recursion: Calculate factorial
function factorial(num){
    if(num==0){
        return 1;
    }
    return num*factorial(num-1);
}
console.log(factorial(5));

//Recursion: Fibonacci sequence
function fibonaci(num){
    if(num<=2){
        return num;
    }
    return fibonaci(num-1)+fibonaci(num-2);
}
console.log(fibonaci(5)); //8
//forloop
for(let i=1;i<=10;i++){console.log(i);}
var sm=0;
let i=1,n=10;
//while loop
while(i<=10){
    sm+=i;
    i+=1;
}
console.log(sm);

//do while
i=1;
var sm=1;
do{
    sm*=i;
    i+=1;
}while(i<10);
console.log(sm);

//for...in loops for objects
var person={name:"Sridhar",age:20,address:{city:"NY",pincode:1002}}
for(let key in person){
    console.log(person[key]);
}

//for ... of loop

var arr=[1,2,3,45];
sm=0;
for(let val of arr){
    sm+=val;
}
console.log(sm);

//break and continue statements
//continue
var arr1=[1,2,3,4,5,6,7,8,9,10];
var res=[];
for(let i of arr1){
    if(i%2==0){
        continue;
    }
    res.push(i);
}
console.log(res);
//break
var arr1=[1,2,3,-4,5,6,76];
for(let i of arr1){
    if(i<0){
        break
    }
    console.log(i)
}
//nested loops
/*for(let i=0;i<5;i++){
    for(let j=0;j<i;j++){
        console.log("*");
    }
    console.log("\n");
}*/

var arr2d=[[0,1],[1,0],[0,-1],[-1,0]];
n=arr2d.length;
var m=arr2d[0].length;
for(let k=0;k<n;k++){
    for(let j=0;j<m;j++){
        // console.log(arr[k][j]," ");
    }
}
arr1.forEach((element)=>{
    console.log(element)
})
