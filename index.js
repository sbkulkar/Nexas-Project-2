document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Your sign-up logic (e.g., validation and submission)
  // For demonstration purposes, simply show a success message
  const successMessage = document.getElementById('success');
  successMessage.textContent = `User ${username} signed up successfully!`;

  // Rotate the signup container after successful submission
  
});


var q3 = document.getElementById('loginBtn');
q3.addEventListener("click", function () {
  
  var h3Element = document.getElementById('signupForm');
  h3Element.classList.add('rotated')
  setTimeout(function() {
    // Redirect to the second page
    window.location.href = 'index2.html';
}, 1000)
  
});document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Your sign-up logic (e.g., validation and submission)
  // For demonstration purposes, simply show a success message
  const successMessage = document.getElementById('success');
  successMessage.textContent = `User ${username} signed up successfully!`;

  // Rotate the signup container after successful submission
  
});


var q3 = document.getElementById('loginBtn');
q3.addEventListener("click", function () {
  
  var h3Element = document.getElementById('box');
  h3Element.classList.add('rotated')
  setTimeout(function() {
    // Redirect to the second page
    window.location.href = 'index2.html';
}, 1000)
  
});

