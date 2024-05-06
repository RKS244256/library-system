// Library Info
var bookNum;
var bookTitle;
var bookAuthor;
var bookType;
var bookPubDate;
// Search
var bookSearch = localStorage.getItem("bookSearch").toLowerCase();
var bookSearchTitle = localStorage.getItem("bookSearchTitle");
var bookSearchAuthor = localStorage.getItem("bookSearchAuthor");
var bookSearchId = localStorage.getItem("bookSearchId");
var bookDateSearch = localStorage.getItem("bookDateSearch").toLowerCase();
var bookSearchType = localStorage.getItem("bookTypeSearch").toLowerCase();


function displayResults(){
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

function displaySpecificResults(){
    bookNum = localStorage.getItem("bookIDs");
    bookTitle = localStorage.getItem("bookTitles");
    bookAuthor = localStorage.getItem("bookAuthors");
    bookType = localStorage.getItem("bookType")
    bookPubDate = localStorage.getItem("bookDate")
    if(bookSearchTitle === 'true' && bookSearch === bookTitle.toLowerCase()) {
        if(bookType === bookSearchType || !bookSearchType){
            console.log(bookPubDate)
            console.log(bookDateSearch)
            console.log(bookPubDate === bookDateSearch)
            console.log(!bookDateSearch)
            if (bookPubDate === bookDateSearch || bookDateSearch === 'na'){
                document.getElementById("bookIdResult").innerHTML = bookNum;
                document.getElementById("bookTitleResult").innerHTML = bookTitle;
                document.getElementById("bookAuthorResult").innerHTML = bookAuthor;
                document.getElementById("bookTypeResult").innerHTML = bookType;
                document.getElementById("bookDateResult").innerHTML = bookPubDate;
            }
        }
    }
    if(bookSearchAuthor === 'true' && bookSearch === bookAuthor.toLowerCase()) {
        if(bookType === bookSearchType || !bookSearchType){
            if (bookPubDate === bookDateSearch || bookDateSearch === 'na'){
                document.getElementById("bookIdResult").innerHTML = bookNum;
                document.getElementById("bookTitleResult").innerHTML = bookTitle;
                document.getElementById("bookAuthorResult").innerHTML = bookAuthor;
                document.getElementById("bookTypeResult").innerHTML = bookType;
                document.getElementById("bookDateResult").innerHTML = bookPubDate;
            }
        }
    }
    if(bookSearchId === 'true' && bookSearch === bookNum) {
        if(bookType === bookSearchType || !bookSearchType){
            console.log(bookPubDate)
            console.log(bookDateSearch)
            console.log(bookPubDate === bookDateSearch)
            console.log(!bookDateSearch)
            if (bookPubDate === bookDateSearch || bookDateSearch === 'na'){
                document.getElementById("bookIdResult").innerHTML = bookNum;
                document.getElementById("bookTitleResult").innerHTML = bookTitle;
                document.getElementById("bookAuthorResult").innerHTML = bookAuthor;
                document.getElementById("bookTypeResult").innerHTML = bookType;
                document.getElementById("bookDateResult").innerHTML = bookPubDate;
            }
        }
    }
    if(bookSearchTitle === 'false' && bookSearchAuthor === 'false' && bookSearchId === 'false') {
        if(bookSearch === bookTitle.toLowerCase() || bookSearch === bookAuthor.toLowerCase() || bookSearch === bookNum.toLowerCase()){
            if(bookType === bookSearchType || !bookSearchType){
                if (bookPubDate === bookDateSearch || bookDateSearch === 'na'){
                    document.getElementById("bookIdResult").innerHTML = bookNum;
                    document.getElementById("bookTitleResult").innerHTML = bookTitle;
                    document.getElementById("bookAuthorResult").innerHTML = bookAuthor;
                    document.getElementById("bookTypeResult").innerHTML = bookType;
                    document.getElementById("bookDateResult").innerHTML = bookPubDate;
                }
            }
        }
    }
}