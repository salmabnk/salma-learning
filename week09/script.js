// Get references
const output = document.getElementById('quote-output');
const button = document.getElementById('get-quote');

// Task 1: Announce status in a live region here
const status = document.getElementById('quoteStatus');

document.getElementById('get-quote').addEventListener('click', async() => {
    // Task 1: Update status live region here with "Loading..."
    status.textContent = 'Loading quote...'; // Visual feedback only for now

    // Disable button during fetch
    button.disabled = true;

    fetch('https://api.allorigins.win/raw?url=https://api.quotable.io/random')
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch quote.');
            return res.json();
        })
        .then(data => {
            output.textContent = `"${data.content}" — ${data.author}`;
            // Task 1: Update status live region here with "Quote loaded"
            status.textContent = 'Quote Loaded';
            button.disabled = false;
        })
        .catch(err => {
            output.textContent = "Failed to load quote.";         
            // Task 1: Optional: add failure message to status region
            status.textContent = 'Unable to fetch a new quote. Please try again.';
            button.disabled = false;
            console.error(err);
        });
});

document.getElementById('clear-quote').addEventListener('click', () => {
    output.textContent = '';
    // Task 1: Clear status live region if applicable
    status.textContent = '';
});

// Task 2: Add event listener for custom keyboard-accessible button here

// Task 3: Add modal open/close and focus logic here

// Task 4: Add arrow key navigation logic for list items here
