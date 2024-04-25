var first = -1;
var second = 1;
var final;
var start = 1;
var arry = [];
var fin = [];
function fiboGene(n) {
    while (start <= n) {
        final = first + second;
        arry.push(final);
        first = second;
        second = final;
        start++;
    }
    return(arry);
}
fin = fiboGene(5);
console.log(fin);