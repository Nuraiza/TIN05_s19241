function Student(first, last, id, grades) {
  this.firstName = first;
  this.lastName = last;
  this.id = id;
  this.grades = grades;
  this.printFullName = function(){
  console.log(this.firstName+" "+this.lastName);
  }
  this.printAverageGrade = function(){
  var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;
console.log("Average grade per semester: "+avg);
  }
}

var s1 = new Student("Nuraiza", "Maruf kyzy","s19241",[3.9,4.0,4.5,5.0,3.8,4.6]);
console.log(s1);
s1.printFullName();
s1.printAverageGrade();