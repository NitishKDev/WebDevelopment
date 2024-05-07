// let num = [2,44,22,57,31];
// console.log(typeof(num) +" "+ num);
// let str= num.toString();
// console.log(typeof(str) +" "+ str);
// let jn=num.join("_");
// console.log(typeof(jn) +" "+ jn);
// num.pop();
// console.log(num);
// num.push(31);
// console.log(num);
// let s=num.shift();
// console.log(s +" and "+ num);
// let us=num.unshift(2);
// console.log("Length is "+us +" and "+ num);

// //delete operator
// let arry=[2,3,55,22,5];
// console.log(arry);
// //delete arry[4];
// console.log(arry);

// //concat
// let arry2=[12,13,5,222,15];
// let newarr=arry.concat(arry2);
// console.log(newarr);
// newarr=arry.concat(arry2,arry);
// console.log(newarr);

//sort : alphabetically
// let ll=[3,55,2,5,35];
// ll.sort();
// console.log(ll);



// //sort : ascending
// let compa=(a,b)=>{
//     return a-b
// }

// let ll=[3,55,2,5,35];
// ll.sort(compa);
// console.log(ll);




// //sort :descending
// let compd=(a,b)=>{
//     return b-a
// }
// let ll=[3,55,2,5,35];
// ll.sort(compd);
// console.log(ll);


// //reverse
// let a=[4,2,5,55];
// console.log(a.reverse());



//splice and splice
let s=[3,4,5,7,1,89];
s.splice(2,2,10,100,1000,10000);
console.log(s);
//let d=s.slice(2);
let d=s.slice(2,4);
console.log(d);