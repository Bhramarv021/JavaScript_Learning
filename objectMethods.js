// Object
// 1. Object Literal
// 2. Singleton Object

// 1. Object Literal
// To Declare
const obj = {
	name: "Bhramar",
	"Full Name": "Bhramar Virmani",
	age: 27,
	email: "bhramarv021@gmail.com",
	lastLoggedIn: ["sat", "mon"]
}

// To Access
console.log(obj.name)
// console.log(obj."Full Name") //Error - As can't key access with space this way
console.log(obj["Full Name"]) //This is the correct way


// To declare and use SYMBOL data type
const mySym = Symbol({"key1": "value1"})

const obj2 = {
	name: "Bhramar",
	"Full Name": "Bhramar Virmani",
	[mySym]: mySym, //Correct way to declare symbol, using [] in key
	age: 27,
	email: "bhramarv021@gmail.com",
	lastLoggedIn: ["sat", "mon"]
}

console.log(obj2[mySym]) //output myKey1

// Few Object Methods
obj2.name = "Bhumik";
obj2.age = 24;
Object.freeze(obj2); //After this any changes in obj2 will not reflect.

//Object.assign(target, source) //It merges the objects in single object.
//Ex.
const obj3 = Object.assign({}, obj, obj2); // this will return single object
console.log("obj3 : ",obj3);

//Another way
const obj4 = {...obj, ...obj2};
console.log("obj4 : ",obj4);

const d = {};
const obj5 = Object.assign(d, obj, obj2);
console.log("d : ",d, obj5);

console.log("All Keys : ",Object.keys(d));
console.log("All Values : ",Object.values(d));
console.log("All entries : ",Object.entries(d));
console.log("Object hasownproperty : ",Object.hasOwnProperty("name"));
console.log("All entries is array? : ",Object.entries(d) instanceof Array); //true
console.log("All Keys is array? : ",Object.keys(d) instanceof Array);

