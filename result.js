var bookNum;
var bookTitle;
var bookAuthor;
var bookSearch;
var bookTitleSearchMode;

function displayResults(){
    bookSearch = localStorage.getItem("bookSearch");
    bookNum = localStorage.getItem("bookIDs");
    bookTitle = localStorage.getItem("bookTitles");
    bookAuthor = localStorage.getItem("bookAuthors");
    console.log(bookSearch)
    if(bookSearch.toLowerCase() === bookTitle.toLowerCase() && localStorage.getItem("bookSearchTitle")){
        document.getElementById("bookIdResult").innerHTML = bookNum;
        document.getElementById("bookTitleResult").innerHTML = bookTitle;
        document.getElementById("bookAuthorResult").innerHTML = bookAuthor;
    }
}
