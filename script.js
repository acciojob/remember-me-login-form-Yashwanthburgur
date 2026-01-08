const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check persistence on page load
if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "block";
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (checkbox.checked) {
        // Save data
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        // Show button immediately
        existingBtn.style.display = "block";
    } else {
        // Clear data
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        // Hide button immediately
        existingBtn.style.display = "none";
    }

    // Alert triggered AFTER all storage/UI logic is done
    alert("Logged in as " + username);
});

existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    alert("Logged in as " + savedUser);
});