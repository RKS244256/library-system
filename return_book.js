function returnBook(bookReturn){//Declares function with the bookReturn argument intended for an HTML form
    if (localStorage.getItem("libBooks")){//Determines whether any library books exist.
        var libBooks = JSON.parse(localStorage.getItem("libBooks"))//Parses the library book database and stores it in the libBooks variable
    } else {
        alert("Error: Book does not exist");//Alert the library technician that the book they've specified doesn't exist
        return;//Returns and stops the function as there's nothing left to do
    }
    for(let i = 0; i<libBooks.length; i++){//Iterates through the library array
        if(libBooks[i][2] === bookReturn.bookIdL.value){//Checks whether the 2nd element of the "i"th index of the libBooks array (responsible for storing book IDs) and ID specified by the library technician match.
            if(!libBooks[i][5]){//Checks whether the book is undefined (available for checkout)
                alert("Error: Book is already in inventory")//Alerts the library technician the book is already in inventory
                return;//Returns and stops the function as there's nothing left to do
            }
            libBooks[i][5] = null//Redefines the 5th element of the "i"th array in libBooks as null (marking the book as available)
            localStorage.setItem('libBooks', JSON.stringify(libBooks));//Overwrites and stores the original libBook value with the new modified array after converting it into a string
            alert(`Success!\n${libBooks[i][0]} returned!`)//Alerts the library technician the book has been returned.
            return;//Returns and stops the function as there's nothing left to do
        }
    }
    alert("Error: Book does not exist")//If no books matching the criteria are found in the libBooks array after iterating through it, there would be no return/termination of the function and this alert would tell the user the book specified does not exist.
}