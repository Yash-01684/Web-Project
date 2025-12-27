// dashboard.js

// 1. Select the form and the display area
const registrationForm = document.querySelector('#register form');
const dashboardSection = document.getElementById('dashboard');
const workshopsList = document.getElementById('my-workshops-list');

// 2. Add Event Listener to the form
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page from refreshing

    // 3. Get values from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const workshop = document.getElementById('workshop').value;

    // 4. Create a new "Card" for the dashboard
    const workshopCard = document.createElement('div');
    workshopCard.className = 'session-card'; 
    workshopCard.style.backgroundColor = '#eaf4f4'; 
    
    workshopCard.innerHTML = `
        <h3>${workshop}</h3>
        <p><strong>Status:</strong> Enrolled ✅</p>
        <p><strong>Registered to:</strong> ${name} (${email})</p>
        <button onclick="this.parentElement.remove()" style="background:#ff6b6b; color:white; border:none; padding:5px; border-radius:3px; cursor:pointer;">Cancel Registration</button>
    `;

    // 5. Show the dashboard and add the card
    dashboardSection.style.display = 'block';
    workshopsList.appendChild(workshopCard);

    // 6. Clear the form for the next entry
    registrationForm.reset();
    
    alert("Success! You have registered for " + workshop);
});
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