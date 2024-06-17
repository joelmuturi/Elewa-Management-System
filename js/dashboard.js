document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById('logoutBtn');
  
    logoutBtn.addEventListener('click', () => {
      firebase.auth().signOut().then(() => {
        // Sign-out successful
        alert('Logged out successfully');
        window.location.href = 'index.html';
      }).catch((error) => {
        alert(error.message);
      });
    });
  
    // Fetch and display user-specific data
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        const userId = user.uid;
        // Fetch user role and render appropriate content
      } else {
        // No user is signed in
        window.location.href = 'index.html';
      }
    });
  });
  