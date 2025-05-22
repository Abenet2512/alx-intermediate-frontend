interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Abenet",
  lastName: "Kebede",
  age: 25,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Sam",
  lastName: "Smith",
  age: 30,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});
document.body.appendChild(table);
