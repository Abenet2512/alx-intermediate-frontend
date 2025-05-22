// Task 1 - Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Task 2 - Directors extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3 - printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

// Task 4 - StudentClass
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
}
