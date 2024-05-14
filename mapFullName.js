const persons = [
  {fname : "Malcom", lname: "Reynolds"},
  {fname : "Kaylee", lname: "Frye"},
  {fname : "Jayne", lname: "Cobb"}
];

const full = persons.map(fullname);
console.log(full);

function fullname(val) {
    return val.fname+" "+val.lname;
}
