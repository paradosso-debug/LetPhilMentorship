// Function to fetch random user using Promise
function fetchUser() {
  new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/');
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error('Error: ' + xhr.statusText));
      }
    };
    xhr.onerror = function () {
      reject(new Error('Network Error'));
    };
    xhr.send();
  })
    .then(function (data) {
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(function (error) {
      console.error(error);
    });
}