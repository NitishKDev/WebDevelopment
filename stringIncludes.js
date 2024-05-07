let sentence="Hello Welcome to javascript programming";
let word="to";
console.log(sentence.includes(word));
if(sentence.includes(word))
{
    console.log(`${word} is present in ${sentence}`);
}
else{
        console.log(`${word} is not present in ${sentence}`);
}

//sentence.includes(word)?console.log(`${word} is present in ${sentence}`): console.log(`${word} is not present in ${sentence}`);