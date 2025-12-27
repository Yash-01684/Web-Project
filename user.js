// user.js

// 1. DATA STORAGE
let workshops = [
    { title: "Web Design Basics", date: "Nov 15, 2025", time: "10:00 AM - 12:00 PM", instructor: "Vara Prasad" },
    { title: "Intro to Python", date: "Nov 20, 2025", time: "2:00 PM - 4:00 PM", instructor: "Arjun Mehta" }
];

let resources = [
    { title: "HTML & CSS Guide", link: "#" }
];

let enrolledStudents = [
    { name: "John Smith", email: "john@example.com", workshop: "Web Design Basics" }
];

document.addEventListener("DOMContentLoaded", () => {
    renderSchedule();
    renderResources();
    renderStudents();
});

// --- WORKSHOP SCHEDULE LOGIC ---
const scheduleForm = document.getElementById('scheduleForm');
const saveScheduleBtn = document.getElementById('saveScheduleBtn');

scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('wsTitle').value;
    const date = document.getElementById('wsDate').value;
    const time = document.getElementById('wsTime').value;
    const instructor = document.getElementById('wsInstructor').value;
    const index = parseInt(document.getElementById('editScheduleIndex').value);

    if (index === -1) {
        workshops.push({ title, date, time, instructor });
    } else {
        workshops[index] = { title, date, time, instructor };
        document.getElementById('editScheduleIndex').value = "-1";
        saveScheduleBtn.textContent = "Schedule Workshop";
    }
    scheduleForm.reset();
    renderSchedule();
});

function renderSchedule() {
    const tbody = document.getElementById('scheduleBody');
    tbody.innerHTML = '';
    workshops.forEach((ws, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${ws.title}</td>
                <td>${ws.date}</td>
                <td>${ws.time}</td>
                <td>${ws.instructor}</td>
                <td>
                    <button onclick="editSchedule(${index})" style="background:#457b9d; color:white; border:none; padding:5px; border-radius:3px; cursor:pointer;">Edit</button>
                    <button onclick="deleteSchedule(${index})" style="background:#ff6b6b; color:white; border:none; padding:5px; border-radius:3px; cursor:pointer;">Delete</button>
                </td>
            </tr>`;
    });
}

window.editSchedule = (index) => {
    const ws = workshops[index];
    document.getElementById('wsTitle').value = ws.title;
    document.getElementById('wsDate').value = ws.date;
    document.getElementById('wsTime').value = ws.time;
    document.getElementById('wsInstructor').value = ws.instructor;
    document.getElementById('editScheduleIndex').value = index;
    saveScheduleBtn.textContent = "Update Workshop";
    window.scrollTo({ top: scheduleForm.offsetTop - 50, behavior: 'smooth' });
};

window.deleteSchedule = (index) => {
    if(confirm("Delete this workshop?")) {
        workshops.splice(index, 1);
        renderSchedule();
    }
};

// --- RESOURCE LOGIC ---
const resourceForm = document.getElementById('resourceForm');
const saveResourceBtn = document.getElementById('saveResourceBtn');

resourceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('resTitle').value;
    const link = document.getElementById('resLink').value;
    const index = parseInt(document.getElementById('editResourceIndex').value);

    if (index === -1) {
        resources.push({ title, link });
    } else {
        resources[index] = { title, link };
        document.getElementById('editResourceIndex').value = "-1";
        saveResourceBtn.textContent = "Add Resource";
    }
    resourceForm.reset();
    renderResources();
});

function renderResources() {
    const tbody = document.getElementById('resourceBody');
    tbody.innerHTML = '';
    resources.forEach((res, index) => {
        tbody.innerHTML += `<tr><td>${res.title}</td><td><a href="${res.link}">View</a></td>
            <td><button onclick="editResource(${index})" style="background:#457b9d; color:white; border:none; padding:5px; border-radius:3px;">Edit</button>
            <button onclick="deleteResource(${index})" style="background:#ff6b6b; color:white; border:none; padding:5px; border-radius:3px;">Delete</button></td></tr>`;
    });
}

window.editResource = (index) => {
    document.getElementById('resTitle').value = resources[index].title;
    document.getElementById('resLink').value = resources[index].link;
    document.getElementById('editResourceIndex').value = index;
    saveResourceBtn.textContent = "Update Resource";
};

window.deleteResource = (index) => {
    if(confirm("Delete resource?")) { resources.splice(index, 1); renderResources(); }
};

// --- STUDENT LOGIC ---
function renderStudents() {
    const tbody = document.getElementById('studentBody');
    tbody.innerHTML = '';
    enrolledStudents.forEach((s, index) => {
        tbody.innerHTML += `<tr><td>${s.name}</td><td>${s.email}</td><td>${s.workshop}</td>
            <td><button onclick="removeStudent(${index})" style="background:#ff6b6b; color:white; border:none; padding:5px; border-radius:3px;">Remove</button></td></tr>`;
    });
}

window.removeStudent = (index) => {
    if(confirm("Remove student?")) { enrolledStudents.splice(index, 1); renderStudents(); }
};
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });
});