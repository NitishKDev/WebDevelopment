function isLeap(year)
{
    if(year % 100 == 0)
    {
        if(year % 400 == 0)
        {
         console.log(year+" is leap year");   
        }
        else
        {
         console.log(year+" is not leap year");   
        }
    }
    else 
    {
        if(year % 4 == 0)
        {
        console.log(year+" is leap year");
        }
        else
        {
        console.log(year+" is not leap year");    
        }
    }
    
}
var year = prompt("Enter year");
isLeap(year);