//function in variable
const function1 = function greet(){
    console.log("hello normal function");
};

console.log(function1);
console.log( typeof function1);
function1();

//anonymous function
const function2 = function(){
    console.log("hello anonymous function");
};
function2();

//function inside object is called method
const obj1 = {
    name:'yohoho',
    fun:function gree(){console.log("method");}
};
obj1.fun();


//passing value inside function
function display(params) {
    console.log("value passed is "+params);
}
display(3);


//passing function into another function
function run(par) {
    par();
}
run(function(){console.log("hello function in function");});



//setTimeout() allows us to run a function in future.
//Asynchronous code: wont wait for a line to finish before going to next line.
//Synchronous code: wait for one line to finish before going to the next line.all code which we write are Synchronous code.

setTimeout(function(){console.log("after 3 second");console.log("yoo");},3000);
console.log("after settimeout");

//here settimeout is asynchrounous code.




//setInterval: same as settimeout but it keep running after each interval.also asynchrounous.
// setInterval(function() {
//     console.log("hello interval");  
// },4000);



//arrow function

const arrowfun = ()=>{
    console.log("arrow function");
};
arrowfun();
// const arrowfun = (param1,param2...)=>{
//     console.log("arrow function");
// };


// const oneparam = (param1)=>{
//     console.log(param1 + 2);
// };
// oneparam(4);
// or
// const oneparam = param1=>{
//     console.log(param1 + 2);
// };
// oneparam(4);



// const oneline = ()=>{return 3+5;};
// oneline();
// or
// const oneline = ()=> 31+5;
// oneline();


