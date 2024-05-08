//keep adding number to an array until 0 is added.

let arr=[12,3,5];
let num= prompt("Enter number");
while(num!=0)
    {
    num=Number.parseInt(num);
    arr.push(num);
    num= prompt("Enter number");
    }
console.log(arr);


