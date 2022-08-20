function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student('Иван', 'male', 22);

let student2 = new Student('Мария', 'female', 20);

let student3 = new Student('Василий', 'male', 21);


Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark){

  if (this.marks === undefined){
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...arguments){
  this.marks = arguments;
}

Student.prototype.getAverage = function(){
  return this.marks.reduce((sum, i) => sum + i, 0) / this.marks.length
}

Student.prototype.exclude = function(reason){
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}