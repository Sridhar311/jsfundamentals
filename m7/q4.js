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
