let ran = (Math.floor(Math.random() * 10) + 1);
let g = 0;
let r=0;
let score = 10;
while (ran !== g) {
    g = Number.parseInt(prompt("Enter the guess"));
    if (ran === g) {
        r++;
        console.log(`Generated number is equal to your guess number ${g}`);
        break;
    } else if (g < ran) {
        r++;
        console.log(`Generated number is greater than your guess number ${g}`);
        score--;
    } else {
        r++;
        console.log(`Generated number is smaller than your guess number ${g}`);
        score--;
    }
}
console.log("Your score out of 10 is " +(score-1) + " and you took " + r + " chance to guess it and actual number was "+ran);
