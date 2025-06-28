const student = {
    fName: "bhramar",
    lName: "virmani"
}

const printStudentDetails = function (...args) {
    console.log("student name is : ", this.fName, this.lName, ...args);
}

const student2 = {
    fName: "bhumik",
    lName: "virmani"
}

//call - Invokes a function immediately with a specified this context and arguments passed individually.
//Syntax: function.call(thisArg, arg1, arg2, ...)
printStudentDetails.call(student, "delhi", "pune");
printStudentDetails.call(student2);

//apply -  Similar to call, but arguments are passed as an array instead of individually.
//Syntax: function.apply(thisArg, [arg1, arg2, ...])
printStudentDetails.apply(student2, ["delhi", "pune"]);

//bind - Does not invoke the function immediately. Instead, it returns a new function with a specified this context and optionally pre-filled arguments.
//Syntax: const boundFunction = function.bind(thisArg, arg1, arg2, ...)
const callStudentDetails = printStudentDetails.bind(student2, "delhi", "pune");
callStudentDetails();
