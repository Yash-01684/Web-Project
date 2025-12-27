// ui-enhancements.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. HIGHLIGHT ACTIVE NAV LINK
    // Get the current URL path (e.g., "student.html")
    const currentPath = window.location.pathname.split("/").pop();
    
    // Select all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        // If the link's href matches the current file name, add the 'active' class
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // 2. FORM INTERACTION (Focus Effects)
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.border = "2px solid #6b9080";
            input.style.outline = "none";
        });
        input.addEventListener("blur", () => {
            input.style.border = "1px solid #ccc";
        });
    });

    // 3. LOGOUT CONFIRMATION
    const logoutLink = document.querySelector('a[href="Login.html"]');
    if (logoutLink) {
        logoutLink.addEventListener("click", (e) => {
            const confirmLogout = confirm("Are you sure you want to logout from AyrahVerse?");
            if (!confirmLogout) {
                e.preventDefault(); // Stop the logout if user clicks 'Cancel'
            }
        });
    }
});