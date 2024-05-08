//filter for number divisible by 10
let arr=[12,3,50,4,100,20];
let flt=arr.filter(fltr);
function fltr(x)
{
    return x%10==0
}
console.log(flt);