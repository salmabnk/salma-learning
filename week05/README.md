# COMP2110 Week 05
Briefly summarise the work you've done this week here.
# Looking at JSON over HTTP


    https://openlibrary.org/works/OL45804W
    https://openlibrary.org/works/OL45804W.json
    


    In the first case, the response is a redirect to another page - what is the status code and where is the browser redirected to?
    What is the Content-Type of the two responses?
    Can you see the JSON well formatted - if not, look for a browser extension that helps you view the JSON data.
    Compare the information returned in both responses - does the JSON have the same information as presented in the HTML page? Is there anything missing?

# Web Application Exercise


    Write the function renderBooks that takes the array of book objects and renders them in the page as a simple list with the title and author of each book.
    The function should find the content div within the page and insert the book list into that.

    Note that the window.onload handler in the script will call renderBooks when the page loads. 
    
    Test this and ensure that your code is displaying the list of books correctly.

    Write a second function called detailedView that displays more information about each book including the image referenced in the imageLink property. 
    
    Modify the window.onload handler to call this function instead of the first one.

    Now that both views work. Implement the onclick handler for the button in the page so that it switches between the two views. 
    
    You will need a global variable to record which view is current so that your function can switch to the other one. 
    
    Note that this variable will change so you need to declare it with 'let'.

    Once you have view switching working, write a stylesheet style.css that displays the detailed list of books as a grid rather than a list.

This is your checkpoint for this week. Commit and push your code to Github and show your work to your tutor.


    