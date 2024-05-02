localStorage.setItem("name","age");
//console.log(localStorage.name);
console.log(localStorage.getItem("name"));

//creating object
const obj1={
    win:0,
    lose:0,
    ties:0
}
console.log(obj1);
//saving object to localStorage
localStorage.setItem("obb",JSON.stringify(obj1));
//getting from localStorage
console.log(JSON.parse(localStorage.getItem("obb")));
//remove from localStorage
//localStorage.removeItem('obj1')