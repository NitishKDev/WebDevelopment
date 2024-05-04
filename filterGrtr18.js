const ages = [32, 33, 16, 40];

const out = ages.filter(funn);
console.log(out);

function funn(val){
    return val>18;
}