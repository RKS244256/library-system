function deleteBook(bookDelete){//Declares a function with the bookDelete argument intended for an HTML form.
    if(!bookDelete.confirmationL.checked){//Determines if the confirmation checkbox was clicked
        return;//If not, the form will alert the library technician to do so and the function will not run.
    }
    if (localStorage.getItem("libBooks")){//Determines whether any books exists within local storage.
        var libBooks = JSON.parse(localStorage.getItem("libBooks"))//If so, parse the value from the libBooks key and store it in the libBooks variable.
    } else {
        alert("Error: Book does not exist");//Alert the library technician that the book they've specified doesn't exist
        return;//Returns and stops the function as there's nothing left to do.
    }
    for(let i = 0; i<libBooks.length; i++){//Iterates through the libBooks array
        if(libBooks[i][2] === bookDelete.bookIdL.value){//If the 2nd element of the "i"th array (responsible for storing a book's ID) match with the specified id from the library technician
            libBooks.splice(i, 1);//Remove one element of the libBook array starting at "i"th index. (Removes the "i" array from the libBook's array without leaving an undefined index)
            localStorage.setItem('libBooks', JSON.stringify(libBooks));//Converts the modified libBooks array into a string and stores it under the key libBooks in local storage
            alert("Book deletion successful!");//Alerts the library technician the deletion was successful
            return;//Returns and stops the function as there's nothing left to do.
        }
    }
    alert("Error: Book does not exist")//If no books matching the criteria are found in the libBooks array after iterating through it, there would be no return/termination of the function and this alert would tell the user the book specified does not exist.
}