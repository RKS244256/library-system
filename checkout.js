function checkout(bookCheckout){
    if (localStorage.getItem("libBooks")){
        var libBooks = JSON.parse(localStorage.getItem("libBooks"))
    } else {
        alert("Error: Book does not exist");
        return;
    }
    for (let i = 0; i<libBooks.length; i++){
        if(libBooks[i][2] === bookCheckout.bookIdL.value){
            if(libBooks[i][5]){
                alert("Error: Book is already checked out");
            } else {
                libBooks[i][5] = bookCheckout.userIdL.value
                localStorage.setItem('libBooks', JSON.stringify(libBooks));
                alert(`Success!\n${libBooks[i][0]} signed out to user #${bookCheckout.userIdL.value}`)
            }
        }
    }
}