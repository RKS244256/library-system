var bookNum;
var bookTitle;
var bookAuthor;

function displayResults(){
    bookNum = localStorage.getItem("bookIDs");
    bookTitle = localStorage.getItem("bookTitles");
    bookAuthor = localStorage.getItem("bookAuthors");
    document.getElementById("bookIdResult").innerHTML = bookNum;
    document.getElementById("bookTitleResult").innerHTML = bookTitle;
    document.getElementById("bookAuthorResult").innerHTML = bookAuthor;
    
}
