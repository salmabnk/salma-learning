document.getElementById('load-jokes').addEventListener('click', () => {
    const status = document.getElementById('status');
    const list = document.getElementById('joke-list');
  
    status.textContent = 'Loading jokes...';
    list.innerHTML = '';
  
    fetch('https://official-joke-api.appspot.com/jokes/ten')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
      })
      .then(data => {
        status.textContent = '';
        data.forEach(joke => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${joke.setup}</strong><br>${joke.punchline}`;
          list.appendChild(li);
        });
      })
      .catch(error => {
        status.textContent = 'Failed to load jokes.';
        console.error('Error fetching jokes:', error);
      });
  });