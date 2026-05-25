document.getElementById('load-joke').addEventListener('click', () => {
    const setupEl = document.getElementById('setup');
    const punchlineEl = document.getElementById('punchline');
  
    setupEl.textContent = 'Loading...';
    punchlineEl.textContent = '';
  
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setupEl.textContent = data.setup;
        punchlineEl.textContent = data.punchline;
      })
      .catch(error => {
        setupEl.textContent = 'Failed to load joke.';
        console.error(error);
      });
  });