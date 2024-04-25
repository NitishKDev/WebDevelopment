var outputt = [];
var num = 1;
function fizzBuzz() {
    while (num <= 100) {

        if (num % 3 == 0 && num % 5 == 0) {
            outputt.push("FizzBuzz");
        }
        if (num % 3 == 0 && num % 5 != 0) {
            outputt.push("Fizz");
        }
        if (num % 3 != 0 && num % 5 == 0) {
            outputt.push("Buzz");
        }
        if (num % 3 != 0 && num % 5 != 0) {
            outputt.push(num);
        }
        num++;
        console.log(outputt);
    }
}
fizzBuzz();