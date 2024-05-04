let filtered = [11, 98, 31, 23, 944];
const evn = filtered.filter(function(params) {
    return params %2===0;
});
console.log(evn);