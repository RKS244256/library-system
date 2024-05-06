// Library Info
var bookNum;
var bookTitle;
var bookAuthor;
var bookType;
var bookPubDate;
// Search
var bookSearchTitle = localStorage.getItem("bookSearchTitle").toLowerCase();
var bookSearchAuthor = localStorage.getItem("bookSearchAuthor").toLowerCase();
var bookSearchId = localStorage.getItem("bookSearchNum")
var bookDateSearch = localStorage.getItem("bookDateSearch")
var bookSearchType = localStorage.getItem("bookTypeSearch")


function displayResults() {
    bookNum = localStorage.getItem("bookIDs");
    bookTitle = localStorage.getItem("bookTitles");
    bookAuthor = localStorage.getItem("bookAuthors");
    bookType = localStorage.getItem("bookType")
    bookPubDate = localStorage.getItem("bookDate")
    document.getElementById("bookIdResult").innerHTML = bookNum;
    document.getElementById("bookTitleResult").innerHTML = bookTitle;
    document.getElementById("bookAuthorResult").innerHTML = bookAuthor;
    document.getElementById("bookTypeResult").innerHTML = bookType;
    document.getElementById("bookDateResult").innerHTML = bookPubDate;
}

function displaySpecificResults() {
    bookNum = localStorage.getItem("bookIDs");
    bookTitle = localStorage.getItem("bookTitles");
    bookAuthor = localStorage.getItem("bookAuthors");
    bookType = localStorage.getItem("bookType")
    bookPubDate = localStorage.getItem("bookDate")
    if (bookNum === bookSearchId && bookTitle.toLowerCase() === bookSearchTitle && bookAuthor.toLowerCase() === bookSearchAuthor && bookType === bookSearchType && bookPubDate === bookDateSearch) {
        document.getElementById("bookIdResult").innerHTML = bookNum;
        document.getElementById("bookTitleResult").innerHTML = bookTitle;
        document.getElementById("bookAuthorResult").innerHTML = bookAuthor;
        document.getElementById("bookTypeResult").innerHTML = bookType;
        document.getElementById("bookDateResult").innerHTML = bookPubDate;
    }
}