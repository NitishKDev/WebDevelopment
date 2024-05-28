function calcu(num1,num2,opera) {
   let r= opera(num1,num2);
    console.log(`The sum of ${num1} and ${num2} is ${r}`);
}


// function add(a,b){
//     return a+b;
// }
// calcu(3,51,add)


calcu(3,16,(a,b)=>{
    return a+b;
})