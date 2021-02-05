function Student(firstName, surname, studentNumber, grades) {
  this.firstName = firstName;
  this.surname = surname;
  this.studentNumber = studentNumber;
  this.grades = grades;

  Object.defineProperty(this, "averageGrade", {
    get() {
      return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    },
  });

  Object.defineProperty(this, "fullName", {
    get() {
      return `${this.firstName} ${this.surname}`;
    },
    set(fullName) {
      var name = fullName.split(" ");
      this.firstName = name[0];
      this.surname = name[1];
    },
  });
}
function showInfo(student) {
  return student;
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
console.log(showInfo(student));
console.log("Average grade " + student.averageGrade);
student.fullName = "Dmytro Borovych";
console.log(student.fullName);