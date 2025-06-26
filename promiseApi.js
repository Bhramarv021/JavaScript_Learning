const p1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("P1 runs");
        resolve("p1");
    },3000)
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("P2 runs");
        resolve("p2");
    },5000)
});

const p3 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("P3 runs");
        resolve("p3");
    },2000)
});

Promise.all([p1,p2,p3])
.then((result)=>{
    console.log("Result all : ",result);
})
.catch((e)=>{
    console.error("Error");
})

Promise.allSettled([p1,p2,p3])
.then((result)=>{
    console.log("Result allSettled : ",result);
})
.catch((e)=>{
    console.error("Error");
})

Promise.race([p1,p2,p3])
.then((result)=>{
    console.log("Result race : ",result);
})
.catch((e)=>{
    console.error("Error");
})

Promise.any([p1,p2,p3])
.then((result)=>{
    console.log("Result any : ",result);
})
.catch((e)=>{
    console.error("Error");
})