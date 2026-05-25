// Get references
const output = document.getElementById('quote-output');
const button = document.getElementById('get-quote');

// Task 1: Announce status in a live region here
const status = document.getElementById('quoteStatus');

document.getElementById('get-quote').addEventListener('click', () => {
    // Task 1: Update status live region here with "Loading..."
    status.textContent = 'Loading quote...'; // Visual feedback only for now

    // Disable button during fetch
    button.disabled = true;

    fetch('https://dummyjson.com/quotes/random')
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch quote.');
            return res.json();
        })
        .then(data => {
            output.textContent = `"${data.quote}" — ${data.author}`;
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
const refreshBtn = document.getElementById("refreshBtn");

function activateRefresh() {
  console.log("Content refreshed!");
  // Put your refresh logic here
   document.getElementById('get-quote').click();
}
// Mouse click support
refreshBtn.addEventListener("click", activateRefresh);

// Keyboard support (Enter + Space)
refreshBtn.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // prevents page scroll on Space
    activateRefresh();
  }
});

// Task 3: Add modal open/close and focus logic here
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

// store last focused element (for returning focus)
let lastFocusedElement = null;

// OPEN modal
openModalBtn.addEventListener('click', () => {
    lastFocusedElement = document.activeElement;

    modal.hidden = false; //show

    // move focus into modal
    closeModalBtn.focus();
});

// CLOSE modal
function closeModal() {
    modal.hidden = true; //hide

    // return focus to element that opened modal
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

closeModalBtn.addEventListener('click', closeModal);
// ESC key closes modal
document.addEventListener('keydown', (event) => {
    if (!modal.hidden && event.key === 'Escape') {
        closeModal();
    }
});

// Task 4: Add arrow key navigation logic for list items here
const listItems = document.querySelectorAll('#quoteList li');
const display = document.getElementById('selected-quote');
listItems.forEach((item, index) => {
  item.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' && listItems[index + 1]) {
      listItems[index + 1].focus();
    }
    if (e.key === 'ArrowUp' && listItems[index - 1]) {
      listItems[index - 1].focus();
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectItem(item);
    }
  });

  item.addEventListener('click', () => {
    selectItem(item);
  });
});

function selectItem(selected) {
  // Remove selection from others
  listItems.forEach(item => {
    item.classList.remove('selected');
    item.setAttribute('aria-selected', 'false');
  });

  // Mark this one as selected
  selected.classList.add('selected');
  selected.setAttribute('aria-selected', 'true');
  display.textContent = `Selected: ${selected.textContent}`;
}