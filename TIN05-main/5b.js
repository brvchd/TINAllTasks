function Student(firstName, surname, studentNumber, grades){
    this.firstName = firstName;
    this.surname = surname;
    this.studentNumber = studentNumber;
    this.grades = grades;
}
function showInfo(student){
    const reducer = (a,b) => a+b;
    const avgGrade = student.grades.reduce(reducer,0) / student.grades.length;
    return `First name: ${student.firstName}, Surname: ${student.surname}, Student number: ${student.studentNumber}, Average grade: ${avgGrade}`;
}

var student = new Student("Dmytro", "Borovych", "S18963", [5,4,5,3,4,3,4,5,5]);
console.log(showInfo(student));