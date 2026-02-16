// Check if a string is a palindrome
let str="ABBA";
function check(str){
    let i=0,j=str.length-1;
    while(i<j){
        if(str[i]!=str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(check(str))