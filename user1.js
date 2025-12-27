// user-dashboard.js

// 1. DATA STORAGE (Simulating a database)
let resources = [
    { title: "HTML & CSS Guide", link: "#" },
    { title: "Python Basics", link: "#" }
];

let enrolledStudents = [
    { name: "John Doe", email: "john@example.com", workshop: "Web Design Basics" }
];

// 2. INITIALIZE PAGE
document.addEventListener("DOMContentLoaded", () => {
    renderResources();
    renderStudents();
});

// --- RESOURCE MANAGEMENT (CRUD) ---

const resourceForm = document.getElementById('resourceForm');

resourceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('resTitle').value;
    const link = document.getElementById('resLink').value;
    const editIndex = parseInt(document.getElementById('editIndex').value);

    if (editIndex === -1) {
        // ADD NEW
        resources.push({ title, link });
    } else {
        // UPDATE EXISTING
        resources[editIndex] = { title, link };
        document.getElementById('editIndex').value = "-1";
        document.getElementById('saveBtn').textContent = "Add Resource";
    }

    resourceForm.reset();
    renderResources();
});

function renderResources() {
    const tbody = document.getElementById('resourceBody');
    tbody.innerHTML = '';
    resources.forEach((res, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${res.title}</td>
                <td><a href="${res.link}" target="_blank">View</a></td>
                <td>
                    <button onclick="editResource(${index})" style="background:#457b9d; color:white; border:none; padding:5px; border-radius:3px; cursor:pointer;">Edit</button>
                    <button onclick="deleteResource(${index})" style="background:#ff6b6b; color:white; border:none; padding:5px; border-radius:3px; cursor:pointer;">Delete</button>
                </td>
            </tr>`;
    });
}

window.editResource = (index) => {
    document.getElementById('resTitle').value = resources[index].title;
    document.getElementById('resLink').value = resources[index].link;
    document.getElementById('editIndex').value = index;
    document.getElementById('saveBtn').textContent = "Update Resource";
};

window.deleteResource = (index) => {
    if(confirm("Delete this resource?")) {
        resources.splice(index, 1);
        renderResources();
    }
};

// --- STUDENT MANAGEMENT ---

function renderStudents() {
    const tbody = document.getElementById('studentBody');
    tbody.innerHTML = '';
    enrolledStudents.forEach((student, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.workshop}</td>
                <td>
                    <button onclick="removeStudent(${index})" style="background:#ff6b6b; color:white; border:none; padding:5px; border-radius:3px; cursor:pointer;">Remove</button>
                </td>
            </tr>`;
    });
}

window.removeStudent = (index) => {
    if(confirm("Remove this student from the workshop?")) {
        enrolledStudents.splice(index, 1);
        renderStudents();
    }
};