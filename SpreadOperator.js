//spread operator with array
const fruits1 = ["apple","orange","banana","kiwi"];
const vegies1 = ["cauli","brinjal","ladyf"];
console.log(fruits1);
console.log(vegies1);

const fruits2 = ["apple","orange","banana","kiwi"];
// const vegies2 = ["cauli","brinjal","ladyf",...fruits2];
const vegies2 = [...fruits2,"cauli","brinjal","ladyf"];
console.log(fruits2);
console.log(vegies2);


//spread operator with object
const fullname = {
  fname:"Jack",
  lname:"Frost"
}
const user={
  ...fullname,
  id:2,
  uname:"jackf001"
}
console.log(fullname);
console.log(user);