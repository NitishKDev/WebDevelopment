let num = Number.parseInt(prompt("Enter number"));
if(num > 10)
{
    alert("You will be redirect to google");
    let c = confirm("Is that fine?");
    if(c)
    {
      location.href="https://google.com";
    } 
}
else{
    console.log("No redirection")
}