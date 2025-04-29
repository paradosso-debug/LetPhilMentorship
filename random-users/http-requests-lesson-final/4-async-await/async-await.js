// Function to fetch random user using async/await
async function fetchUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) throw new Error('Error: ' + response.statusText);
    const data = await response.json();
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error(error);
  }
}