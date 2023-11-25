//synchronous or blocking
//Asynchronous or non-blocking
const fs=require("fs");
fs.readFile("file2.txt","utf-8",(err,data)=>{
    console.log(err,data)
});
console.log("This is one message");