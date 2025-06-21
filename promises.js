const promiseOne = new Promise(function(resolve, reject){
    //You can do any async task
    //Like DB call, networks etc
    setTimeout(function(){
        console.log("Async task completed");

        //Promise returns resolve() after success
        resolve();
    },1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task completed 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise consumed 2");
})

const promiseThree = new Promise(function(resolve, reject){
    //You can do any async ta sk
    //Like DB call, networks etc
    setTimeout(function(){
        //Promise returns resolve() after success
        resolve({userName: 'chai', email:"chai@mail.com"});
    },1000);
})

promiseThree.then(function(user){
    console.log("Returned value from promise : ",user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        const error = false;
        if (!error){
            resolve({userName: 'Bhramar', password: 'password123'})
        }
        else {
            reject("These is an error");
        }
    },1000);
})

promiseFour.then(function(user){
    console.log("user is : ",user.userName);
    // This below return passes the return object to next then param
    return user.userName;
}).then((userName)=>{
    console.log("then 2 userName is : ",userName);
}).catch((err)=>{
    console.log("error in promise : ",err);
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        const err = false;
        if (!err) {
            resolve({userName: 'JS', password: '123'});
        }
        else {
            reject("JS error");
        }
    },1000);
})

async function consumePromiseFive(){
    try {
        // Promise is an object so call it in below way and not as a function()
        const response = await promiseFive;
        console.log("response is : ",response);
    } catch (error) {
        console.log("Error : ",error);
    }
}

consumePromiseFive();


// Fetch data from API
async function getAllUsers(){
    try {
        // Below we are using await as fetch call can take some time to execute
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // Below we are using await as convert response to JSON can take time
        const data = await response.json();
        console.log("data is : ",data);
    } catch (error) {
        console.log("Error is : ", error);
    }
}

getAllUsers();

// Convert above async call in .then as then call not required await and async
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    // Once the response converted to JSON then we pass this
    // to thenable or to next then() as param
    return response.json();
})
.then((d)=>{
    console.log("data is : ",d);    
})
.catch((err)=>{
    console.log("Error is : ",err);    
})