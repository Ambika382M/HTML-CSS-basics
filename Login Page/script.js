document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if(username.length <=8){
        errorMessage.textContent = 'Username must be atleast 8 characters long';
        return;
    }
    if(password.length<=8){
        errorMessage.textContent ='Password must be atleast 8 characters long';
        return;
    }

    // Simple validation (you can replace this with your own logic)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect or perform other actions here
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});