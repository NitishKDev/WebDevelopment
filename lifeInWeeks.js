function lifeInWeeks(age) {
//Assume 90 years.
var agee = 90-age;    
var x = agee*365;
var y = agee*52;
var z = agee*12;
console.log("You have "+x+" days, "+y+" weeks, and "+z+" months left.");
}
lifeInWeeks(5);
