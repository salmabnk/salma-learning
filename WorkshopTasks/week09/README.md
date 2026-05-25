COMP2110 Week XX

Briefly summarise the work you've done this week here.
# Task 1
# Task 2
# Task 3
# Keyboard behavior
You can tab through all buttons
“Refresh” works with:
Enter
Space
Modal:
Opens → focus moves inside
Press Escape → closes
Focus returns to “Open Modal”

// Another way of doing Task 4: Add arrow key navigation logic for list items here

// const list = document.getElementById('quote-list');
// const items = list.querySelectorAll('[role="listitem"], li, button');

// // Ensure only one item is tabbable at a time (roving tabindex)
// items.forEach((item, index) => {
//     item.setAttribute('tabindex', index === 0 ? '0' : '-1');
// });

// list.addEventListener('keydown', (event) => {
//     const currentIndex = Array.from(items).indexOf(document.activeElement);

//     if (event.key === 'ArrowDown') {
//         event.preventDefault();
//         const nextIndex = (currentIndex + 1) % items.length;

//         items[currentIndex].setAttribute('tabindex', '-1');
//         items[nextIndex].setAttribute('tabindex', '0');
//         items[nextIndex].focus();
//     }

//     if (event.key === 'ArrowUp') {
//         event.preventDefault();
//         const prevIndex = (currentIndex - 1 + items.length) % items.length;

//         items[currentIndex].setAttribute('tabindex', '-1');
//         items[prevIndex].setAttribute('tabindex', '0');
//         items[prevIndex].focus();
//     }
// });
