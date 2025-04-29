// Function to fetch random user using Axios
function fetchUser() {
  axios.get('https://randomuser.me/api/')
    .then(function (response) {
      document.getElementById('output').textContent = JSON.stringify(response.data, null, 2);
    })
    .catch(function (error) {
      console.error(error);
    });
}