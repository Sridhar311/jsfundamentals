//if else if else statements
var marks=65;
if(marks>90){
    console.log("Grade A");
}
else if(marks>70){
    console.log("Grade B");
}
else{
    console.log("Grade C")
}
//swtich cases
var day=2
switch(day){
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break
    case 7:
        console.log("Sunday");
        break
    default:
        console.log("Invalid")
}
//ternary operator
var age=11
console.log(age>=18?"Adult":"Not an adult");

//logical operator;
var val1=true,val2=false;
if(val1 && val2) console.log("Both are True");
else if (val1 || val2) console.log("One of them is True");
else console.log("Both are false");