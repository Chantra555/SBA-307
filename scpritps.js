const modal = document.getElementById('registerModal');
const registerLink = document.getElementById('registerLink');
const closeBtn = document.querySelector('.close');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

// Open modal
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
  registerForm.reset();
  passwordError.style.display = 'none';
  successMessage.style.display = 'none';
});

// Close modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// Handle registration
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    passwordError.style.display = 'block';
    return;
  }

  passwordError.style.display = 'none';
  successMessage.style.display = 'block';
  registerForm.reset();

  setTimeout(() => {
    modal.style.display = 'none';
    successMessage.style.display = 'none';
  }, 2000);
});

// Handle login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login functionality would connect to your backend here!');
});
