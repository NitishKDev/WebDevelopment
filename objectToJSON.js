const product = {
    Name:'icecream',
    Price :333.42,
    Quality:'high',
    Flavour:{
        fla1:'mango',
        fla2:'berries',
        fla3:'coconut'
    }
}
console.log(product);

//object to json
let jsoon = JSON.stringify(product);
console.log(jsoon);

//json to object
let oobj = JSON.parse(jsoon);
console.log(oobj);
