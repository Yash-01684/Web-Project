// login.js

let currentCaptcha = "";

function generateCaptcha() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    currentCaptcha = captcha;
    document.getElementById("captcha-display").innerText = captcha;
}

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const captchaInput = document.getElementById("captcha-input").value;

    // CAPTCHA check
    if (captchaInput !== currentCaptcha) {
        alert("Incorrect CAPTCHA! Please try again.");
        generateCaptcha(); // Refresh captcha on failure
        document.getElementById("captcha-input").value = "";
        return false;
    }

    // Default Credentials
    if (username === "admin" && password === "klu@123") {
        window.location.href = "welcome.html";
        return false;
    } else {
        alert("Invalid Username or Password!");
        return false;
    }
}

// Generate the first captcha on load
window.onload = generateCaptcha;