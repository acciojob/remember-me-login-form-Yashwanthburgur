// On page load
window.addEventListener("load", () => {
    const savedUsername = localStorage.getItem("savedUsername");
    const savedPassword = localStorage.getItem("savedPassword");

    if (savedUsername && savedPassword) {
        document.getElementById("existing").style.display = "block";
    }
});

// Handle form submit
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("checkbox").checked;

    alert(`Logged in as ${username}`);

    if (remember) {
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);
        document.getElementById("existing").style.display = "block";
    } else {
        localStorage.removeItem("savedUsername");
        localStorage.removeItem("savedPassword");
        document.getElementById("existing").style.display = "none";
    }
});

// Existing user login
document.getElementById("existing").addEventListener("click", () => {
    const savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});

});