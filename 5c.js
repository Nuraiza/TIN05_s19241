var student = {
firstName: null,
lastName: null,
id: null,
subjectList: ["PPJ", "SAD", "MAD", "LEK", "TIN","ZPR"],

createStudent: function(first, last, id){
 this.firstName = first;
  this.lastName = last;
  this.id = id;
}
}



var s1 = Object.create(student);
s1.createStudent("Nuraiza", "Maruf kyzy", "s19241");

console.log(s1.firstName);
console.log(s1.subjectList);


