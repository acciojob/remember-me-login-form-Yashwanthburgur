// Check if credentials exist on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    
    if (savedUsername && savedPassword) {
        document.getElementById('existing').style.display = 'block';
    }
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading page
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;
    
    // Show alert
    alert(`Logged in as ${username}`);
    
    // Handle Remember Me
    if (rememberMe) {
        // Save to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Remove from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    
    // Show existing user button if credentials saved
    if (rememberMe) {
        document.getElementById('existing').style.display = 'block';
    } else {
        document.getElementById('existing').style.display = 'none';
    }
});

// Handle existing user login
document.getElementById('existing').addEventListener('click', function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});