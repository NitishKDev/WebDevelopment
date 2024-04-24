//Body Mass Index(BMI) = weight(kg) / Height^2(m^2)
function BMI(w,h)
{
    var bmi = w / (h*h);
    //bmi = Math.round(bmi);
    if(bmi<18.5)
    {
         var interpretation = 'Your BMI is '+bmi+', so you are underweight.';
         return interpretation;
    }
   
     if(bmi>=18.5 && bmi <24.9)
     {
   var interpretation = 'Your BMI is '+bmi+', so you have a normal weight.';
    return interpretation;
     }
     if(bmi>=24.9)
     {
    var interpretation = 'Your BMI is '+bmi+', so you are overweight.';
    return interpretation;
     }
}
var w = prompt("Enter weight in kg");
var h = prompt("Enter height in meter");
var res = BMI(w,h);
console.log(res);
