// Function to fetch user (GET)
function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then(response => {
      if (!response.ok) throw new Error('Error: ' + response.statusText);
      return response.json();
    })
    .then(data => {
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error(error);
    });
}

// Function to send dummy user (POST)
function sendUser() {
  fetch('https://randomuser.me/api/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test User' })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error(error));
}