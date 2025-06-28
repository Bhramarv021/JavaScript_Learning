// internal bind method
const obj = {
    name : 'bhramar',
    course: 'MCA'
}

const printObj = function (...arg) {
    console.log("Print obj is : ",this.name, ...arg);
}

const callPrintObj = printObj.bind(obj, "Delhi", "Pune");
callPrintObj("bye", "ok");

// Own implementation of bind method (Polyfill)
Function.prototype.myBind = function (...args) {
    console.log("My bind");
    const localObj = this;
    const remainingArgs = args.slice(1); //this will remove args[0] from args
    return function(...internalArgs) {
        localObj.apply(args[0], [...remainingArgs, ...internalArgs]);
    }
}

const ownBindCall = printObj.myBind(obj, "Delhi", 'Pune');
ownBindCall("bye", "ok");

//Output ->
// Print obj is :  bhramar Delhi Pune bye ok
// My bind
// Print obj is :  bhramar Delhi Pune bye ok