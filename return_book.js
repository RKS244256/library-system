function returnBook(bookReturn){
    if (localStorage.getItem("libBooks")){
        var libBooks = JSON.parse(localStorage.getItem("libBooks"))
    } else {
        alert("Error: Book does not exist");
        return;
    }
    for(let i = 0; i<libBooks.length; i++){
        if(libBooks[i][2] === bookReturn.bookIdL.value){
            if(!libBooks[i][5]){
                alert("Error: Book is already in inventory")
                return;
            }
            libBooks[i][5] = null
            localStorage.setItem('libBooks', JSON.stringify(libBooks));
            alert(`Success!\n${libBooks[i][0]} returned!`)
            return;
        }
    }
    alert("Error: Book does not exist")
}