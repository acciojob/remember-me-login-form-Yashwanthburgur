const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

function updateUI() {
    if (localStorage.getItem("username")) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
}

// Check storage when page loads
updateUI();

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Update UI BEFORE showing alert so the test sees the change immediately
    updateUI();
    alert("Logged in as " + username);
});

existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    alert("Logged in as " + savedUser);
});