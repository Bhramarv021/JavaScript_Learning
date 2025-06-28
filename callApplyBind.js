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

printStudentDetails.call(student, "delhi", "pune");
printStudentDetails.call(student2);
printStudentDetails.apply(student2, ["delhi", "pune"]);
const callStudentDetails = printStudentDetails.bind(student2, "delhi", "pune");
callStudentDetails();