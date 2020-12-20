const person = { 
  name: "Sarah", 
  age: 20, 
  gender: "female",
  
  calculateBirthYear: function(year){ return year-20;},
 
 printInfo(){
   console.log("Hello everyone, my name is "+this.name+" and I am "+this.age+" years old.");
 },

addEducation: function(n){ person.education=n; }

}; 

var printProperties = function(obj){
var val;
for(prop in obj){
val = person[prop];
console.log(prop+": "+val);

}

}


           console.log(person.calculateBirthYear(2020));
           person.printInfo();
           person.addEducation("Secondary");
           console.log(person.education);
           printProperties(person);
         
  