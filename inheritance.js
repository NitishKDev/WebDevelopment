class Person{
    constructor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("hello guys..i am eating")
    }
      sleep(){
        console.log("i am sleeping")
    }
    work(){
        console.log("Do nothing");
    }  
}

class Engineer extends Person{
    constructor(branch){
        super();
        this.branch = branch;
    }
    work(){
        console.log("i am working on construction");
    }  
}

class Doctor extends Person{
    work(){
        console.log("i am working on humans");
    }  
}

let e1 = new Engineer("chemical engg");
console.log(e1);

// let d1 = new Doctor();
// console.log(d1.work());