// On page load, show "existing" button if credentials are stored
window.addEventListener("load", () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  const existingBtn = document.getElementById("existing");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
});

// Handle form submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  const username = usernameInput.value;
  const password = passwordInput.value;
  const remember = checkbox.checked;

  alert("Logged in as " + username);

  if (remember) {
    // save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    // clear credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

// Existing user login
document.getElementById("existing").addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert("Logged in as " + savedUser);
  }
});
