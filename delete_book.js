function deleteBook(bookDelete){
    if (localStorage.getItem("libBooks")){
        var libBooks = JSON.parse(localStorage.getItem("libBooks"))
    } else {
        alert("Error: Book does not exist");
        return;
    }
    for(let i = 0; i<libBooks.length; i++){
        if(libBooks[i][2] === bookDelete.bookIdL.value){
            libBooks.splice(i, 1);
            localStorage.setItem('libBooks', JSON.stringify(libBooks));
            alert("Book deletion successful!");
            return
        }
    }
    alert("Error: Book does not exist")
}