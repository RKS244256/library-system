// Imports the sessionAccount key from session storage and stores it in the sessionAccount variable. This serves as an existing login the site remembers until you close it. If it exists, it will store an array. If not, it will store a null value.
const sessionAccount = JSON.parse(sessionStorage.getItem("sessionAccount"))
// Imports the libBooks key from local storage and stores it in the libBooks variable. If it exists, it will store an array. If not, it will store a null value.
var libBooks = JSON.parse(localStorage.getItem("libBooks"))

// The runtime() function queues 2 other functions to run (checkSession & borrowedBooks). This is because onload can only run one function.
function runtime(){
    checkSession();
    borrowedBooks();
}

function checkSession(){
    if(sessionAccount && sessionAccount[3] === null){//Checks if the sessionAccount exists and whether the 3rd element of the sessionAccount array (responsible for determining whether an account has admin privileges) is null (the default value). 
        document.getElementById("accountNumber").innerHTML = `#${sessionAccount[0]}` //Displays the account's ID number on the accounts page within the accountNumber span element. No redirects required!
    } else if(sessionAccount && sessionAccount[3]){//Checks if the sessionAccount exists and whether the third element of the sessionAccount array (responsible for determining whether an account has admin privileges) is True.
        location.replace("library_technician_page.html")//Redirects to the library technician page.
    } else{//If there is no sessionAccount or it is null (essentially the same thing), this else statement will be triggered.
        location.replace("login.html"); // Redirects to the login page.
    }
}

function borrowedBooks(){
    if(libBooks){ //Checks whether there are any books to check.
        for(let i = 0; i<libBooks.length; i++){ //A for loop which iterates throughout the libBooks array
            if(parseInt(libBooks[i][5])===parseInt(sessionAccount[0])){ //Checks whether the 5th element of 'i'th array in the libBook array (responsible for keeping track of if a book is borrowed and who the book is being borrowed by using their id) is equal to the 0th element of the sessionAccount variable (which stores the user's id)
                //Create a new div and assign it to the variable rdiv. This serves as the div which encapsulates all of our selected book's information.
                var rdiv = document.createElement('div');
                //Assign it the id 'block"
                rdiv.id = 'block';
                //Assign it and everything within it the class "resultd"
                rdiv.className = 'resultd';
                //Add it to the body of the website.
                document.getElementsByTagName('body')[0].appendChild(rdiv);
                // These 3 lines are repeated for each aspect of the book. They are as follows.
                // Create a new paragraph HTML element and assign it to a variable.
                // Add the paragraph into the div created prior (rdiv, id:block)
                // Add the element which corresponds to an aspect of the book to the paragraph in order to be displayed.
                // Title
                var title = document.createElement('p');
                rdiv.appendChild(title);
                title.innerHTML = libBooks[i][0];
                // Author
                var author = document.createElement('p');
                rdiv.appendChild(author);
                author.innerHTML = libBooks[i][1];
                // Book ID
                var id = document.createElement('p');
                rdiv.appendChild(id);
                id.innerHTML = libBooks[i][2];
                // Book Type
                var type = document.createElement('p');
                rdiv.appendChild(type);
                type.innerHTML = libBooks[i][3];
                // Date Published
                var date = document.createElement('p');
                rdiv.appendChild(date);
                date.innerHTML = libBooks[i][4];
            }
        }
    }
}

function logOut(){
    sessionStorage.clear(); //Clears out session storage
    alert("Successfully logged out");//Alerts the user that they have been signed out.
}