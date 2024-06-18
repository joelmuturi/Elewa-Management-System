document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  const dataTableBody = document.getElementById('data-table').querySelector('tbody');

  logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      window.location.href = 'public\index.html';
    });
  });

  // Function to fetch user data from the backend
  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/users');
      const users = await response.json();

      // Populate table with user data
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
        `;
        dataTableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Fetch and display user data on page load
  fetchUserData();
});
