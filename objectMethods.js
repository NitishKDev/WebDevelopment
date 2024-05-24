const student = {
    fname:"Jack Frost",
    marks:87,
    printmarks:function (){
        console.log(`Marks is ${this.marks}`);
    },
    printname(){
    console.log(`Name is ${this.fname}`)
    },
    human(){
        console.log(" i am the the human");
    }
}
console.log(student.fname);
console.log(student.marks);
console.log(student.printmarks());
console.log(student.printname());
console.log(student)

const person={
    human(){
        console.log("I am human");
    }
}
student.__proto__=person;
console.log(student.human())