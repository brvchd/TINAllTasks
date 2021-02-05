class Student {
  constructor(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
  }
  get averageGrades() {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(fullName) {
    var name = fullname.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
  showInfo(student) {
    return student;
  }
}

var student = new Student("Dmytro", "Borovych", "S18963", [
  5,
  4,
  5,
  3,
  4,
  3,
  4,
  5,
  5,
]);
console.log(student.showInfo(student));
