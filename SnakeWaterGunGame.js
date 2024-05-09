console.log("Welcome to Snake Water Gun Game");
let comp = ["s","w","g"];
let ran= Math.floor(Math.random() * 3);
let guess = comp[ran];
//console.log(comp[ran]);
let user = prompt("choose between snake , water and gun\ns for snake\nw for water \ng for gun");
switch(user)
    {
        case 's':
            if(user === guess)
            {
                console.log("Tie  :"+ " user="+user + " computer="+guess);
            }
            else if(guess ==='w')
            {
                console.log("User won  :"+ " user="+user + " computer="+guess);
            }
            else
            {
                console.log("Computer won  :"+ " user="+user + " computer="+guess);
            }
            break;
        case 'w':
            if(user === guess)
            {
                console.log("Tie  :"+ " user="+user + " computer="+guess);
            }
            else if(guess ==='s')
            {
                console.log("Computer won  :"+ " user="+user + " computer="+guess);
            }
            else
            {
                console.log("User won  :"+ " user="+user + " computer="+guess);
            }
            break;
        case 'g':
            if(user === guess)
            {
                console.log("Tie  :"+ " user="+user + " computer="+guess);
            }
            else if(guess ==='s')
            {
                console.log("User won  :"+ " user="+user + " computer="+guess);
            }
            else
            {
                console.log("Computer won  : "+ "user="+user + " computer="+guess);
            }
            break;
        default:
            console.log("Please enter valid number");
    }


