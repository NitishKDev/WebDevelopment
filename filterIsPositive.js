let filtered = [112, 52, 0, -1, 944];

const posi=filtered.filter(function(val){
    return val>0;
});
console.log(posi);