const params = new URLSearchParams(window.location.search);
console.log("Query Parameters:", Object.fromEntries(params.entries()));
if (params.get("name")) {
    document.body.innerHTML += `<h2>Welcome, ${params.get("name")}!</h2>`;
}

const getButton = document.getElementById('getButton');
    const postButton = document.getElementById('postButton');

    // GET Request Example
    getButton.addEventListener('click', async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        alert('GET Response:\n' + JSON.stringify(data, null, 2));
      } catch (error) {
        console.error('Error with GET request:', error);
      }
    });

    // POST Request Example
    postButton.addEventListener('click', async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: 'My New Post',
            body: 'This is a test post',
            userId: 1
          })
        });
        const data = await response.json();
        alert('POST Response:\n' + JSON.stringify(data, null, 2));
      } catch (error) {
        console.error('Error with POST request:', error);
      }
    });