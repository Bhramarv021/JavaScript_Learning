//practice program 1
const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

const operation = (a, b, logic) => {
    return logic(a,b);
} 

console.log(operation(10,20,add));

//practice program 2
const radius = [10,20,60];

const area = (r) => {
    return Math.PI * r * r;
}

const circumference = (r) => {
    return 2 * Math.PI * r;
}

const diameter = (r) => {
    return 2 * r;
}

const calculate = (logic, r) => {
    const d = [];
    r.forEach(element => {
        d.push(logic(element));
    });
    return d;
}

console.log("Result is : ",calculate(diameter, radius));
console.log("Result is : ",calculate(circumference, radius));
console.log("Result is : ",calculate(area, radius));
