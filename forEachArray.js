// //forEach with one parameter.
// const arr=["make dinner","eat","watch",45,"sleep"];
// arr.forEach(function(val){
//     console.log(val);
//     console.log(i)
// });

// //forEach with two parameter.
// const arr=["make dinner","eat","watch",45,"sleep"];
// arr.forEach(function(val,i){
//     console.log(val);
//     console.log(i)
// });

//forEach with continue.
const arr=["make dinner","eat","watch",45,"sleep"];
arr.forEach(function(val,i){
    if(val==="eat"){
        return;
    }
    console.log(val);
    console.log(i)
});