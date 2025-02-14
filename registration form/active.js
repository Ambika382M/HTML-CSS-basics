document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.getElementById('gender').value;

    // Basic validation
    if (name === '' || email === '' || password === '' || confirmPassword === '' || gender === '') {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('message').innerText = 'Passwords do not match.';
        return;
    }

    // Simulate successful registration
    document.getElementById('message').innerText = 'Registration successful! Welcome, ' + name + '!';
    
    // Clear the form
    document.getElementById('registrationForm').reset();
});