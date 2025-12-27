// advanced-features.js

document.addEventListener("DOMContentLoaded", () => {
    
    // --- FEATURE 1: SEARCH & FILTER ---
    const searchInput = document.getElementById("workshopSearch");
    const workshopCards = document.querySelectorAll(".workshop-card");

    if (searchInput) {
        searchInput.addEventListener("keyup", () => {
            const filter = searchInput.value.toLowerCase();
            
            workshopCards.forEach(card => {
                const title = card.querySelector("h3").innerText.toLowerCase();
                const description = card.querySelector("p").innerText.toLowerCase();
                
                if (title.includes(filter) || description.includes(filter)) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    }

    // --- FEATURE 2: LIVE COUNTDOWN TIMER ---
    // Set a date for your next big workshop (e.g., Nov 15, 2025)
    const countdownDate = new Date("Nov 15, 2025 10:00:00").getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const timerElement = document.getElementById("timer");
        if (timerElement) {
            if (distance < 0) {
                timerElement.innerHTML = "Session has started!";
            } else {
                timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }
    };

    // Update every 1 second
    setInterval(updateTimer, 1000);
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
// welcome.js

document.addEventListener('DOMContentLoaded', () => {
    // --- DARK MODE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if(themeToggle) themeToggle.textContent = '☀️ Light Mode';
    }

    if(themeToggle) {
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
    }

    // --- BUTTON CLICK LOGIC ---

    // 1. Hero Button: Explore Workshops (Scrolls down to the workshop section)
    const exploreBtn = document.querySelector('.hero button');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const workshopSection = document.querySelector('.workshops');
            workshopSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Card Buttons: Register (Redirects to student registration page)
    const registerButtons = document.querySelectorAll('.workshop-card button, .event-card button');
    registerButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the name of the workshop from the card header
            const workshopName = event.target.parentElement.querySelector('h3').innerText;
            
            // Optional: Store the workshop name to pre-select it on the student page
            localStorage.setItem('selectedWorkshop', workshopName);
            
            // Redirect to the student page
            window.location.href = 'student.html';
        });
    });
});