// On page load show existing user button if credentials stored
window.addEventListener("load", () => {
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (savedUser && savedPass) {
        document.getElementById("existing").style.display = "block";
    }
});

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("checkbox").checked;

    alert(`Logged in as ${username}`);

    if (remember) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        document.getElementById("existing").style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        document.getElementById("existing").style.display = "none";
    }
});

// Existing user login
document.getElementById("existing").addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
});
