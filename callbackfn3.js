function calcu(num1,num2,opera) {
   let r= opera(num1,num2);
    console.log(`The operation on ${num1} and ${num2} is ${r}`);
}

const add= (a,b)=> a+b;
calcu(3,5,add)

const sub= (a,b)=> a-b;
calcu(3,5,sub)

const mul= (a,b)=> a*b;
calcu(3,5,mul)

const div= (a,b)=> a/b;
calcu(3,5,div)