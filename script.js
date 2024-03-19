const students = [
    { name: "Neha", age: 25, department: "Computer Science", totalMarks: 55 },
    { name: "Lal", age: 24, department: "Civil Engineering", totalMarks: 80 },
    { name: "Abhay", age: 23, department: "Mechanical Engineering", totalMarks: 45 },
    { name: "Riya", age: 18, department: "Artificial Intelligence", totalMarks: 90 },
    { name: "Krish", age: 22, department: "Cyber Security", totalMarks: 88 },
    { name: "Beena", age: 22, department: "MCA", totalMarks: 99 }
];

const tableBody = document.getElementById("studentTableBody");

function displayStudents(array) {
    tableBody.innerHTML = "";
    array.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.totalMarks}</td>
        `;
        tableBody.appendChild(row);
    });
}

function sortStudents(field) {
    const sortedStudents = [...students].sort((a, b) => a[field] > b[field] ? 1 : -1);
    displayStudents(sortedStudents);
}

function filterBySearch(query) {
    const filteredStudents = students.filter(student => {
        return Object.values(student).some(value => {
            return value.toString().toLowerCase().includes(query.toLowerCase());
        });
    });
    displayStudents(filteredStudents);
}

function filterByMarks() {
    const minMarks = document.getElementById("marksFilterInput").value;
    const filteredStudents = students.filter(student => student.totalMarks >= minMarks);
    displayStudents(filteredStudents);
}

document.getElementById("sortSelect").addEventListener("change", function() {
    sortStudents(this.value);
});

document.getElementById("searchInput").addEventListener("input", function() {
    filterBySearch(this.value);
});

displayStudents(students);
