function checkout(bookCheckout){//Declares a function with the bookCheckout argument for an HTML form.
    if (localStorage.getItem("libBooks")){//Checks whether the libBooks key exists.
        var libBooks = JSON.parse(localStorage.getItem("libBooks"))//If so, it parses the string into a usable array and stores it in the libBooks variable
    } else {
        alert("Error: Book does not exist");//Otherwise, it alerts the library technician the book does not exist as no books exist.
        return; //Returns and stops the function as there's nothing left to do.
    }
    for (let i = 0; i<libBooks.length; i++){//Iterates through the libBooks array
        if(libBooks[i][2] === bookCheckout.bookIdL.value){//Checks whether the 2nd element of the "i"th array in libBooks (responsible for storing ids) matches with the id provided in the form filled by the library technician
            if(libBooks[i][5]){ //If the 5th element of the "i"th array in libBooks (responsible for storing whether the book is checked out and to whom) is not null (meaning it's avaiable) or has a value (the id of the user who currently has the book)
                alert("Error: Book is already checked out"); //If the 5th element of the "i"th array is defined, then the book is checked out and the library technician is alerted.
                return;//Returns and stops the function as there's nothing left to do.
            } else {
                libBooks[i][5] = bookCheckout.userIdL.value//If the 5th element in the "i"th array is null, assign it the value of the specified user's id
                localStorage.setItem('libBooks', JSON.stringify(libBooks));//Converts the modified libBooks array into a string and stores it in the libBooks key
                alert(`Success!\n${libBooks[i][0]} signed out to user #${bookCheckout.userIdL.value}`)//Alerts the library technician that the book has been successfully checked out
                return;//Returns and stops the function as there's nothing left to do.
            }
        }
    }
    alert("Error: Book does not exist");//If no books matching the criteria are found in the libBooks array after iterating through it, there would be no return/termination of the function and this alert would tell the user the book specified does not exist.
}