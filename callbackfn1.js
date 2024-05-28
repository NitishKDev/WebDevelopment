function greet(name,callbk) {
    console.log(`Hello ${name}`);
    callbk(4);
    
}

function double(n){
    console.log(n+n);
}

greet("Jack",double);