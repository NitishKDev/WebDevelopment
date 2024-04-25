var bottle = 99;
function beer(){
    while(bottle >= 1)
        {
            if(bottle ==1)
            {
                console.log(bottle+" bottle of beer on the wall, "+bottle+" bottle of beer.");
                console.log("Take one down and pass it around, no more bottles of beer on the wall.");
                console.log("\n");
                console.log("No more bottles of beer on the wall, no more bottles of beer.");
                console.log("Go to the store and buy some more, "+ (bottle+98) +" bottles of beer on the wall.");
                  console.log("\n");
            }
            else{
             console.log(bottle+" bottles of beer on the wall, "+ bottle+" bottles of beer.");
               console.log("Take one down and pass it around, " + (bottle-1) + " bottles of beer on the wall.");
                console.log("\n");
            }
            bottle--;
        }
}
beer();