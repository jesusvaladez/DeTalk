document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form submission

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username !== "" && password !== "") {
            alert("Account created successfully! (Demo Mode)");
        } else {
            alert("Please fill in both fields.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("create-account-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for now

        // Get form values
        let firstName = document.getElementById("first-name").value.trim();
        let secondName = document.getElementById("second-name").value.trim();
        let email = document.getElementById("email").value.trim();
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let repeatPassword = document.getElementById("repeat-password").value.trim();
        let collegeType = document.getElementById("college-type").value;

        // Check if any field is empty
        if (!firstName || !secondName || !email || !username || !password || !repeatPassword || collegeType === "*Select your option*") {
            alert("Please fill in all fields before proceeding.");
            return;
        }

        // Check if passwords match
        if (password !== repeatPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        alert("Account successfully created! Welcome to DeConnect.");

        this.reset();
    });
});

document.getElementById("back-to-login").addEventListener("click", function () {
    window.location.href = "index.html"; 
});
