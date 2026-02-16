const display=document.getElementById("display");
function appendValue(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        const res=eval(display.value);
        display.value=res;
    }
    catch(err){
        display.value="Error";
    }
}