document.addEventListener('DOMContentLoaded', function() {
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('confirm-password');
    
    passwordInput.addEventListener('input', function() {
        if (passwordInput.value === confirmPasswordInput.value) {
          confirmPasswordInput.classList.remove('error');
        } else {
          confirmPasswordInput.classList.add('error');
        }
    });
    confirmPasswordInput.addEventListener('input', function() {
      if (passwordInput.value === confirmPasswordInput.value) {
        confirmPasswordInput.classList.remove('error');
      } else {
        confirmPasswordInput.classList.add('error');
      }
    });
  });
  