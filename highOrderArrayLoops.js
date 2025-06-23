//For of
const arr = ['Bhramar', 10, 'Hello', null, {'job' : 'SE'}];
for (const element of arr) {
    console.log('ele : ',element);
}

const map = new Map();
map.set('IN', 'India')
map.set('US', 'United Stated')
map.set('SL', 'Sri lanka')
map.set('IN', 'India')
map.set('ENG', 'England')
map.set('NZ', 'New Zeland')

console.log('map : ',map);

for (const ele of map){
    console.log('ele :',ele);
}

for (const [a,b] of map){
    console.log('ele :',a,b);
}

console.log(typeof(map));

const obj1 = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'rubby',
    ts: 'typescript'
};

for (const key in obj1) {
//     if (Object.prototype.hasOwnProperty.call(obj1, key)) {
//         const element = obj1[key];
//         console.log("element in obj1 is : ",element);
//     }
    console.log("element in obj1 is : ",key);
}
