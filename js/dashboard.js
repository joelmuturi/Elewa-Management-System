document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  const dataTableBody = document.getElementById('data-table').querySelector('tbody');

  logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      window.location.href = 'index.html';
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

  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User(Manager)' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Employee' },
    { id: 3, name: 'Tabby Myles', email: 'tabby.myles@example.com', role: 'Employee' }
];

// Function to insert rows into the table
function populateTable(data) {
    const tableBody = document.querySelector('#data-table tbody');
    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table with data
populateTable(users);

  // Fetch and display user data on page load
  fetchUserData();
});
