function togglePassword() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('showPassword');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.innerHTML = '<i class="bi bi-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    eyeIcon.innerHTML = '<i class="bi bi-eye"></i>';
  }
}



function toggleSignupPassword() {
  const passwordInput = document.getElementById('signupPassword');
  const eyeIcon = document.getElementById('showSignupPassword');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.innerHTML = '<i class="bi bi-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    eyeIcon.innerHTML = '<i class="bi bi-eye"></i>';
  }
}

function toggleConfirmPassword() {
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const eyeIcon = document.getElementById('showConfirmPassword');

  if (confirmPasswordInput.type === 'password') {
    confirmPasswordInput.type = 'text';
    eyeIcon.innerHTML = '<i class="bi bi-eye-slash"></i>';
  } else {
    confirmPasswordInput.type = 'password';
    eyeIcon.innerHTML = '<i class="bi bi-eye"></i>';
  }
}

document.getElementById('showSignupPassword').addEventListener('click', function() {
  toggleSignupPassword();
});

document.getElementById('showConfirmPassword').addEventListener('click', function() {
  toggleConfirmPassword();
});


document.getElementById('signupLink').addEventListener('click', function(event) {
  event.preventDefault();
  $('#staticBackdrop').modal('hide');
  $('#signupModal').modal('show');
});


document.getElementById('loginLinkFromSignup').addEventListener('click', function(event) {
  event.preventDefault();
  $('#signupModal').modal('hide');
  $('#staticBackdrop').modal('show');
});

document.getElementById('showPassword').addEventListener('click', function() {
  togglePassword();
});
  
