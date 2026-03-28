
// a list of book objects
let allBooks = [];

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

const loadData = () => {
    fetch('books.json')
    .then(response => response.json())
    .then(data => {
      allBooks = data;
      renderBooks(allBooks.books);
    })
  }

window.onload = () => {
    loadData();
};


