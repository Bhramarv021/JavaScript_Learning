const users = [
    {name: 'Bhramar', age: 27},
    {name: 'Bhumik', age: 25},
    {name: 'Yatharth', age: 30},
    {name: 'Ashish', age: 27}
]

const output = users.reduce(function(acc, curr){
    console.log(acc[curr.age]);
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
        console.log("if : ",acc);
    } 
    else {
        acc[curr.age] = 1;
        console.log("Else : ",acc);
    }
    console.log("before ret : ",acc);
    return acc;
}, {});

console.log(output);