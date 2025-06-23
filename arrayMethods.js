const arr = [10,20,30,'bhramar',50,{name: 'yatharth'}]
console.log("original arr is : ",arr);
// original arr is :  [ 10, 20, 30, 'bhramar', 50, { name: 'yatharth' } ]

arr.pop();
console.log("arr after pop() is : ",arr);
// arr after pop() is :  [ 10, 20, 30, 'bhramar', 50 ]

arr.push({name: 'bhumik'})
console.log("arr after push() is : ",arr);
// arr after push() is :  [ 10, 20, 30, 'bhramar', 50, { name: 'bhumik' } ]

const removedEl = arr.shift();
console.log("arr after shift() is : ",arr, removedEl);
// arr after shift() is :  [ 20, 30, 'bhramar', 50, { name: 'bhumik' } ] 10

const len = arr.unshift(60);
console.log("arr after unshift() is : ",arr, len);
// arr after unshift() is :  [ 60, 20, 30, 'bhramar', 50, { name: 'bhumik' } ] 6

const d = arr.join('|')
console.log("arr after join() is : ",arr, typeof d, d);
// arr after join() is :  [ 60, 20, 30, 'bhramar', 50, { name: 'bhumik' } ] string 60|20|30|bhramar|50|[object Object]

// slice() - slice takes range but excludes end range value and returns that part of array. 
// But didn’t do any manipulation in original array values.
const sliceEx = arr.slice(2,4)
console.log("arr after slice() is : ",arr, sliceEx);
// arr after slice() is :  [ 60, 20, 30, 'bhramar', 50, { name: 'bhumik' } ] [ 30, 'bhramar' ]

// splice() - splice() also takes range but includes end range also and returns that part of array. 
// Also it does manipulation in original array. As that part get removed from the original array. 
const spliceEx = arr.splice(2,4)
console.log("arr after slice() is : ",arr, spliceEx);
// arr after slice() is :  [ 60, 20 ] [ 30, 'bhramar', 50, { name: 'bhumik' } ]

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
const arrayFrom = Array.from("bhramar");
console.log('arrayFrom : ',arrayFrom);
// arrayFrom :  ['b', 'h', 'r','a', 'm', 'a','r']

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

// The Array.isArray() static method determines whether the passed value is an Array.
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false

// The Array.of() static method creates a new Array instance from a variable number of arguments, 
// regardless of number or type of the arguments.
const arr1 = Array.of("foo", 2, "bar", true) 
console.log(arr1);
// Expected output: Array ["foo", 2, "bar", true]
arr1.push({name: 'naman'})
console.log(arr1);
// Expected output: Array ["foo", 2, "bar", true, {name: 'naman'}]

console.log(Array.of());
// Expected output: Array []