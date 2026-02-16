const prom=new Promise((resolve,reject)=>{
    const success=true;
    if(success){
        resolve("Successfully completed");
    }
    else{
        reject("Operation Failed");
    }
})
console.log(prom)


//async/await
function delay(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

async function gree(){
    console.log("Start");
    await delay(1000);
    console.log("End");
}
gree();
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

//modern using .then and .catch
async function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then((response)=>response.json())
  .then((data)=>console.log(data))
  .catch((err)=>console.log(err));
}
fetchData()