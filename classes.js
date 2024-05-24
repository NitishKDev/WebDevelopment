class Animal{
    constructor(myage){
        console.log("Object Created!")
        this.myage = myage;
        console.log(`My age is ${myage}`)
    }
    speak(){
        console.log("i can speak")
    }
    eat(){
        console.log("i can eat")
    }
    // age(myage){
    //     this.myage=myage;
    //     console.log(myage)
    // }
}

let a1 = new Animal(43);
console.log(a1.speak());
console.log(a1.eat());

// let a2 = new Animal();
// console.log(a2)
// let a3 = new Animal();
// console.log(a3)
