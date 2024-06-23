// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your authentication logic here (e.g., API call)
    alert('Login attempt with username: ' + username + ' and password: ' + password);
});

// Sign Up modal handlers
document.getElementById('signUpBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signUpModal').classList.remove('hidden');
});

document.getElementById('closeSignUpModal').addEventListener('click', function() {
    document.getElementById('signUpModal').classList.add('hidden');
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signUpUsername').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    // Add your sign-up logic here (e.g., API call)
    alert('Sign up attempt with username: ' + username + ', email: ' + email + ' and password: ' + password);
    document.getElementById('signUpModal').classList.add('hidden');
});

// Forgot Password modal handlers
document.getElementById('forgotPasswordBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('forgotPasswordModal').classList.remove('hidden');
});

document.getElementById('closeForgotPasswordModal').addEventListener('click', function() {
    document.getElementById('forgotPasswordModal').classList.add('hidden');
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('forgotPasswordEmail').value;

    // Add your password reset logic here (e.g., API call)
    alert('Password reset attempt with email: ' + email);
    document.getElementById('forgotPasswordModal').classList.add('hidden');
});