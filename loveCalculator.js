//randomly calculating love percentage.
var name1 = prompt("What is your name?");
var name2 = prompt("What is their name?");
var per = Math.random();
per = per * 100;
per = Math.floor(per) + 1;
if(per > 70)
{
 alert("Dear " +name1+ " and "+name2 + ": Your love score is "+per+"%." +" Your love is unbreakable");   
}
if(per > 30 && per <= 70)
{
    alert("Dear " +name1+ " and "+name2 + ": Your love score is "+per+"%");   
}
if(per <= 30)
{
   alert("Dear " +name1+ " and "+name2 + ": Your love score is "+per+"%." +" Your love is like oil and water.");    
}
