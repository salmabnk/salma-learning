// Get references to DOM elements
const getQuoteBtn = document.getElementById('getQuoteBtn');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const copyBtn = document.getElementById('copyBtn');
const quoteStatus = document.getElementById('quoteStatus');
const shareBtn = document.getElementById('shareBtn');
const shareFeedback = document.getElementById('shareFeedback');
const openModalBtn = document.getElementById('openModalBtn');
const helpModal = document.getElementById('helpModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const quoteListbox = document.getElementById('quoteListbox');
const quoteOptions = Array.from(document.querySelectorAll('#quoteListbox [role="option"]'));
let lastFocusedElement = null;

const fallbackQuotes = [
    {
        content: 'The only limit to our realization of tomorrow is our doubts of today.',
        author: 'Franklin D. Roosevelt'
    },
    {
        content: 'Life is 10% what happens to us and 90% how we react to it.',
        author: 'Charles R. Swindoll'
    },
    {
        content: 'Do not wait; the time will never be just right.',
        author: 'Napoleon Hill'
    }
];

// Function to fetch a quote from the API
async function fetchQuote() {
    try {
        // Announce to screen readers that we're loading
        quoteStatus.textContent = 'Loading quote…';
        
        const response = await fetch('https://api.quotable.io/random');
        
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        
        const data = await response.json();
        
        // Update the quote display
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `— ${data.author}`;
        
        // Announce to screen readers that quote has loaded
        quoteStatus.textContent = `Quote loaded: ${data.content} by ${data.author}`;
        
    } catch (error) {
        console.error('Error fetching quote:', error);
        
        const fallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        quoteText.textContent = `"${fallback.content}"`;
        quoteAuthor.textContent = `— ${fallback.author}`;
        quoteStatus.textContent = 'Could not load online quote; showing local fallback instead.';
    }
}

// Function to copy the quote to clipboard
function copyQuote() {
    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    
    navigator.clipboard.writeText(fullQuote).then(() => {
        // Announce success to screen readers
        quoteStatus.textContent = 'Quote copied to clipboard';
        
        // Provide visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(error => {
        console.error('Error copying to clipboard:', error);
        quoteStatus.textContent = 'Failed to copy quote';
    });
}

function shareQuote() {
    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    
    shareFeedback.textContent = 'Share quote activated';
    console.log('Share quote action:', fullQuote);
}

function openModal() {
    lastFocusedElement = document.activeElement;
    helpModal.hidden = false;
    closeModalBtn.focus();
}

function closeModal() {
    helpModal.hidden = true;
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

function handleModalKeydown(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

function updateListboxSelection(index) {
    quoteOptions.forEach((option, i) => {
        option.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
}

function handleListboxKeydown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const currentIndex = quoteOptions.indexOf(event.currentTarget);
        const nextIndex = event.key === 'ArrowDown'
            ? Math.min(currentIndex + 1, quoteOptions.length - 1)
            : Math.max(currentIndex - 1, 0);
        quoteOptions[nextIndex].focus();
        updateListboxSelection(nextIndex);
    }
}

quoteOptions.forEach((option, index) => {
    option.addEventListener('keydown', handleListboxKeydown);
    option.addEventListener('focus', () => updateListboxSelection(index));
});

// Event listeners
getQuoteBtn.addEventListener('click', fetchQuote);
copyBtn.addEventListener('click', copyQuote);
shareBtn.addEventListener('click', shareQuote);
shareBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        shareQuote();
    }
});
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
helpModal.addEventListener('keydown', handleModalKeydown);

// Load an initial quote when the page loads
window.addEventListener('load', fetchQuote);