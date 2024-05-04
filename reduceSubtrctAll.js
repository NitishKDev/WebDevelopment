const numbers = [175, 50, 25];

let value = numbers.reduce(function(tot,num){
    return tot+num;
});

console.log(value);