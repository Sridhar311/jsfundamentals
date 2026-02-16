//Create and resolve a Promise

//creating a promise
const prom=new Promise((resolve,reject)=>{
    const success=true;
    if(success){
        resolve("Operation successfull");
    }
    else{
        reject("Failed prgram");
    }
})
console.log(prom);

//resolving a promise
prom.then((resolve)=>{
    console.log("success")
}).catch((error)=>console.log(error));

//using async/await
async function  runprom() {
    try{
        const result=await prom;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
runprom();

//Error handling with .catch()
function mayfail(shouldfail){
    return new Promise((resolve,reject)=>{
        if(shouldfail){
            reject("Something went wrong");
        }
        else{
            resolve("Sucessfully completed");
        }
    })
}
mayfail(false).then((resolve)=>console.log(resolve))
.catch((error)=>console.log(error));

//Promise.all() for parallel execution
//Promise.all() is used to run multiple asynhrounous operations in parallel and wait until all of them are resolved

const urls=["https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
    "https://jsonplaceholder.typicode.com/todos/5"
];
const fetchedurls=urls.map((url)=>fetch(url).then((res)=>res.json()));
Promise.all(fetchedurls)
.then((todo)=>{
    console.log("Todo",JSON.stringify(todo,null,2));
}).catch((err)=>console.log(err));

//Promise.race() use case
//instead of waiting for all promises to finish like promise.all() ,it resolves or rejects as soon as first promise settles other
//promises are ingnored
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Promise 1 done"),1000)
});
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("Promise 2 rejected"),500);
})
Promise.race([promise1,promise2])//promise 2 rejected hence promise 1 gets ingnored
.then((res)=>console.log(res))
.catch((err)=>console.log(err));
//if any of the promise resolve or reject the all other ones gets ingored
