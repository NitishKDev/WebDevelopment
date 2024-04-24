var name = prompt("Enter your name");
var len = name.length;
var ini = name.slice(0,1);
ini = ini.toUpperCase();
var res = name.slice(1,len).toLowerCase();
var final = ini+res;
alert("your name is "+final);
