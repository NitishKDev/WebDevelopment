//built in modules
//reading files
const fs=require("fs");
const text=fs.readFileSync("file2.txt","utf-8");
console.log("The content of the file is");
console.log(text);
//replacing file contents and writing into another file
let textt=fs.readFileSync("file2.txt","utf-8");
textt=textt.replace("welcome","okairi");
console.log(textt);
fs.writeFileSync("file2_1.txt",textt);