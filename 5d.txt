function Student(first, last, id, grades) {
  this.firstName = first;
  this.lastName = last;
  this.id = id;
  this.grades = grades;
  this.printFullName = function(){
  console.log(this.firstName+" "+this.lastName);
  }
  this.AverageGrade = function(){
  var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;
return avg;
  }
 
 Object.defineProperty(Student.prototype, 'fullName', {
    get: function() {
        return this.firstName+" "+this.lastName;
    },
    set: function(value) {
        var words = value.split(" ");
        this.firstName= words[0]||"";
        this.lastName = words[1]||"";
    }
    
});

Object.defineProperty(Student.prototype, 'getAverageGrade', {
    get: function() {
        return this.AverageGrade();
    },
    
});

 
}

var s1 = new Student("Nuraiza", "Maruf kyzy","s19241",[3.9,4.0,4.5,5.0,3.8,4.6]);
console.log(s1);
s1.printFullName();
s1.fullName = "Cristina Aqualera";
s1.printFullName();
console.log(s1.fullName);
console.log(s1.getAverageGrade);




