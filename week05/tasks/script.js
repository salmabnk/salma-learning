
// a list of book objects
let allBooks = [] ;

// a function to generate a display of all of the books
// in an array
const renderBooks = (bookArray) => {
  const target = document.getElementById('content');
  let content = "<ul>";
  for (let i= 0;i<bookArray.length;i++){
    const book = bookArray[i];
    content += `<li>${book.title} by <em> ${book.author}</em></li>`
  };
  content += "</ul>";
  target.innerHTML = content;
  
};

const renderBooksDetailedView = (bookArray) => {
  const target = document.getElementById('content');
  let content = '<div class ="book-grid">';
  for (let i= 0;i<bookArray.length;i++){
    const book = bookArray[i];
    content += `<div class ="book">
    <p><strong>${book.title}</strong> by <em> ${book.author}</em></p>
    <img src="${book.imageLink}" alt = "book cover">
    <dl class="book-description">
                <dt>Language</dt><dd>${book.language}</dd>
                <dt>Country</dt><dd>${book.country}</dd>
            </dl>
    </div>`
  };
  content += "</div>";
  target.innerHTML = content;
  };

// global variable to record which view is current
let display = "list";

// an event handler for the control button
document.getElementById('control').onclick = (event) => {
    console.log('control button clicked');
    if (display === "list") {
        display = "grid";
    } else {
        display = "list";
    }
    loadData();
};

const render = () =>{
      if (display == 'grid') {
         renderBooksDetailedView(allBooks.books);
     }
    else {
       renderBooks(allBooks.books);
      }
    }

const loadData = () => {
    fetch('books.json')
    .then(response => response.json())
    .then(data => {
      allBooks = data;
      render();
    })
  }


window.onload = () => {
    loadData();
};


