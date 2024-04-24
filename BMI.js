//Body Mass Index(BMI) = weight(kg) / Height^2(m^2)
function BMI(w,h)
{
    var bmi = w / (h*h);
    return Math.round(bmi);
}
var w = prompt("Enter weight in kg");
var h = prompt("Enter height in meter");
var res = BMI(w,h);
console.log(res);