// Function to fetch random user using XHR
function fetchUser() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomuser.me/api/');

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } else {
      console.error('Error:', xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error('Network Error');
  };

  xhr.send();
}