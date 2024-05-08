//console.log(console);

// console.log("Hello i am console.log");
// console.error("Hello i am console.error");
//console.assert(3>5);
//console.clear();


// let obj={
//     name:"jack",
//     marks:77,
//     age:44,
//     gen:"Male"
// }
// console.log(obj);
// console.table(obj);

//console.warn("Hello..plz avoid smoking");
//console.info("Drink milk");


//how much time taken by any statement to execute
console.time("ForLoop");
for(let i=0;i<9;i++){
    console.log("hello");
}
console.timeEnd("ForLoop");