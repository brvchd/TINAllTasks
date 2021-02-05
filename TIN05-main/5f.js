class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.surname}`;
  }
  set fullName(fullName) {
    var name = fullname.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
}
class Student extends Person {
  constructor(firstName, surname, studentIndex, grades) {
    super(firstName, surname);
    this.studentIndex = studentIndex;
    this.grades = grades;
  }
  get avgGrades() {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  }
}
const student = new Student("Dmytro", "Borovych", "S18963", [
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
console.log(student);
