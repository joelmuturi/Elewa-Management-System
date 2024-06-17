// app.js

const auth = firebase.auth();

document.getElementById('loginFormElement').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Firebase authentication
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      showMessage('successMessage', 'Welcome Elewa!');
      setTimeout(() => {
        window.location.href = '/dashboard.html'; // Redirect to dashboard after login
      }, 2000); // Redirect to dashboard after 2 seconds
    })
    .catch((error) => {
      const errorMessage = error.message;
      showMessage('errorMessage', errorMessage);
    });
});

document.getElementById('signupFormElement').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Firebase authentication
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      showMessage('successMessage', 'Welcome to Elewa!');
      setTimeout(() => {
        window.location.href = '/dashboard.html';
      }, 2000); // Redirect to dashboard after 2 seconds
    })
    .catch((error) => {
      const errorMessage = error.message;
      showMessage('errorMessage', errorMessage);
    });
});

// Forgot Password functionality
document.getElementById('forgotPasswordFormElement').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('forgotPasswordEmail').value;

  // Firebase forgot password
  auth.sendPasswordResetEmail(email)
    .then(() => {
      showMessage('successMessage', 'Password reset email sent. Check your inbox.');
    })
    .catch((error) => {
      const errorMessage = error.message;
      showMessage('errorMessage', errorMessage);
    });
});

function showMessage(elementId, message) {
  const element = document.getElementById(elementId);
  if (message) {
    document.getElementById(elementId + 'Text').textContent = message;
  }
  element.classList.remove('hidden');
  setTimeout(() => {
    element.classList.add('hidden');
  }, 5000); // Hide message after 5 seconds
}
