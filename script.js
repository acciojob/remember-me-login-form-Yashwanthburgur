// Check localStorage on page load
window.addEventListener('load', function() {
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');
    // If credentials exist, show the existing button
    if (savedUsername && savedPassword) {
        document.getElementById('existing').style.display = 'inline-block';
    }
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;
    
    // Show alert
    alert(`Logged in as ${username}`);
    
    // Handle Remember Me checkbox
    if (rememberMe) {
        // Save credentials
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
        // Show existing button
        document.getElementById('existing').style.display = 'inline-block';
    } else {
        // Remove credentials
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
        // Hide existing button
        document.getElementById('existing').style.display = 'none';
    }
    
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('checkbox').checked = false;
});

// Handle existing user login
document.getElementById('existing').addEventListener('click', function() {
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});