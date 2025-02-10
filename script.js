// signup.js (handles signup data storage)
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (email && password) {
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
            alert("Signup successful! Please login.");
            window.location.href = "index.html"; // Redirect to login
        } else {
            alert("Please fill in all fields.");
        }
    });
});

// script.js (handles login validation)
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect after login
        } else {
            alert("Invalid email or password.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const role = document.querySelector("input[name='role']:checked").value;
        
        if (role === "distributor") {
            window.location.href = "distributor.html";
        } else {
            window.location.href = "dashboard.html";
        }
    });
});
