const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');

// Function to handle input events for password and confirm password inputs
function handleInput() {
    // Check if passwords match
    const passwordsMatch = passwordInput.value === confirmPasswordInput.value;

    // Apply error class to both inputs if passwords don't match
    passwordInput.classList.toggle('error', !passwordsMatch);
    confirmPasswordInput.classList.toggle('error', !passwordsMatch);

    // Show or hide password error message based on password match
    passwordError.classList.toggle('hidden', passwordsMatch);
}

// Add event listener for input events on password and confirm password inputs
passwordInput.addEventListener('input', handleInput);
confirmPasswordInput.addEventListener('input', handleInput);
