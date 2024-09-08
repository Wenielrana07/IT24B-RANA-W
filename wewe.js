class Student {
    constructor(name, studentId) {
        this.name = name;
        this.studentId = studentId;
        this.grades = [];
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) { // Ensure the grade is between 0 and 100
            this.grades.push(grade);
            console.log(`Grade ${grade} added for ${this.name}.`);
        } else {
            console.log("Invalid grade. Please enter a grade between 0 and 100.");
        }
    }

    calculateAverage() {
        if (this.grades.length > 0) {
            const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
            return sum / this.grades.length;
        } else {
            return 0;
        }
    }

    isPassing() {
        return this.calculateAverage() >= 60; // Assume passing grade is 60 and above
    }

    displayInfo() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Grades: ${this.grades}`);
        const average = this.calculateAverage();
        console.log(`Average Grade: ${average.toFixed(2)}`);
        if (this.isPassing()) {
            console.log(`${this.name} Pasar ka congrats.`);
        } else {
            console.log(`${this.name} Bagsak ka see u next year.`);
        }
    }
}


const student1 = new Student("Weniel", "1981");
const student2 = new Student("bani", "2001");
const student3 = new Student("Brylle", "2004");
const student4 = new Student("Harold", "2003");
const student5 = new Student("Clint", "2000");


// Add grades for students
student1.addGrade(85);
student1.addGrade(78);
student1.addGrade(92);

student2.addGrade(55);
student2.addGrade(65);
student2.addGrade(58);

student3.addGrade(88);
student3.addGrade(61);
student3.addGrade(84);

student4.addGrade(70);
student4.addGrade(95);
student5.addGrade(80);

student4.addGrade(90);
student4.addGrade(95);
student5.addGrade(89);

// Display student information
student1.displayInfo();
console.log(); 
student2.displayInfo();
console.log();
student3.displayInfo();
console.log();
student4.displayInfo();
console.log();
student5.displayInfo();
console.log();
