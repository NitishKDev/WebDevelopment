const input = [1, -4, 12, 0, -3, 29, -150];
let sum =0;
const out = input.map(function(value) {
    if(value>0)
    {
        sum+=value;
    }
})
console.log(sum);