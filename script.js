const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Function to toggle button visibility
function updateExistingButton() {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
}

// Initial check on page load
updateExistingButton();

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

    alert(`Logged in as ${username}`);
    updateExistingButton(); // Update UI immediately
});

existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
});
