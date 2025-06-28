// Without currying
const multiply = function (x,y) {
  return (x * y);
}

console.log("Multiple of 2 and 3 is : ", multiply(2,3));
console.log("Multiple of 4 and 8 is : ", multiply(4,8));

// currying by bind method
const multiplyNumbers = function (x,y) {
    console.log(x * y);
}

const multiplyBy2 = multiplyNumbers.bind(this, 2);
multiplyBy2(6); // 2 * 6 = 12
const multiplyBy4 = multiplyNumbers.bind(this, 4);
multiplyBy4(8); // 4 * 8 = 32

//currying by closure
const multiplyByClosure = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

const mulByThree = multiplyByClosure(3);
mulByThree(5); // 3 * 5 = 15
const mulByFive = multiplyByClosure(5);
mulByFive(10); // 5 * 10 = 50

// currying by closure with arrow function
const multiplyByClosureArrow = (x) => (y) => {
    console.log(x * y);
}
const mulBySix = multiplyByClosureArrow(6);
mulBySix(7); // 6 * 7 = 42
const mulByEight = multiplyByClosureArrow(8);
mulByEight(9); // 8 * 9 = 72