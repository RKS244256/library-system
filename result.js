// Library Info
var libBooks = JSON.parse(localStorage.getItem("libBooks"))//Parses the value from the libBook key in local storage and stores it in the libBooks variable
// Search
var bookSearch = localStorage.getItem("bookSearch").toLowerCase(); //Stores the value from the bookSearch key in local storage in the bookSearch variable after converting all alpha characters into lowercases
var bookSearchTitle = localStorage.getItem("bookSearchTitle");//Stores the value from the bookSearchTitle key in local storage in the bookSearchTitle variable 
var bookSearchAuthor = localStorage.getItem("bookSearchAuthor");//Stores the value from the bookSearchAuthor key in local storage in the bookSearchAuthor variable 
var bookSearchId = localStorage.getItem("bookSearchId");//Stores the value from the bookSearchId key in local storage in the bookSearchId variable 
var bookSearchDate = localStorage.getItem("bookDateSearch");//Stores the value from the bookDateSearch key in local storage in the bookDateSearch variable 
var bookSearchTypeFiction = localStorage.getItem("bookTypeSearchFiction");//Stores the value from the bookTypeSearchFiction key in local storage in the bookTypeSearchFiction variable 
var bookSearchTypeNonFiction = localStorage.getItem("bookTypeSearchNonFiction");//Stores the value from the bookTypeSearchNonFiction key in local storage in the bookTypeSearchNonFiction variable 
var bookSearchTypeGraphicNovel = localStorage.getItem("bookTypeSearchGraphicNovel");//Stores the value from the bookTypeSearchGraphicNovel key in local storage in the bookTypeSearchGraphicNovel variable 
let results = [];//Creates an array which will be used to store matching books

function displaySpecificResult(){//Declares the displaySpecificResult function
    for(i=0;i<libBooks.length;i++){//Iterates through the libBooks array
        var accepted;//Defines a new variable to keep track and determine whether a book is a match.
        if(bookSearchTitle === "true" && bookSearch === libBooks[i][0].toLowerCase()){//Detexrmines whether the user specifies to only search book title and if so, see if the book's title matches the search input
            accepted = true;//Marks the book as a match
        }  else {
            accepted = false;//Marks the book as not a match (yet)
        }
        if(bookSearchAuthor === "true" && bookSearch === libBooks[i][1].toLowerCase()){//Determines whether the user specifies to only search book author and if so, see if the book's author matches the search input
            accepted = true;//Marks the book as a match
        }
        if(bookSearchId === "true" && bookSearch === libBooks[i][2]){//Determines whether the user specifies to only search book id and if so, see if the book's id matches the search input
            accepted = true;//Marks the book as a match
        }
        if(bookSearchTitle === "false" && bookSearchAuthor === "false" && bookSearchId === "false"){//Checks if there are no specifications as to what to search
            if(bookSearch === libBooks[i][0].toLowerCase() || bookSearch ===libBooks[i][1].toLowerCase() || bookSearch === libBooks[i][2]){//checks if the search matches any main sspect of the book (author, title, id)
                accepted = true;//Marks the book as a match
            } else {
                accepted = false;//Eliminates the book as a possible match
            }
        }
        if(bookSearchDate !== "na" && bookSearchDate !== libBooks[i][3] && accepted){//Determines whether a date was specified, the book passed one of the prior tests, and if so, does the book fall within that publishing date.
            accepted = false;
        }
        if(bookSearchTypeFiction === "true" && libBooks[i][4] !== "fiction" && accepted){//Determines whether the user specified the book should be fiction and if so, if the book isn't.
            accepted = false; // Eliminates the book as a possible match
        }
        if(bookSearchTypeNonFiction === "true" && libBooks[i][4]  !== "nonfiction" && accepted){//Determines whether the user specified the book should be non fiction and if so, if the book isn't.
            accepted = false;// Eliminates the book as a possible match
        }
        if(bookSearchTypeGraphicNovel === "true" && libBooks[i][4]  !== "graphicnovel" && accepted){//Determines whether the user specified the book should be a graphic novel and if so, if the book isn't.
            accepted = false;// Eliminates the book as a possible match
        }
        if (accepted){//Checks whether the book was a match
            results.push(libBooks[i]);//Pushes the "i"th array to the results array in order to be displayed.
        }
    }
    for(i=0;i<results.length;i++){//Iterates through the results array
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
        //Title
        var title = document.createElement('p')
        rdiv.appendChild(title);
        title.innerHTML = results[i][0];
        //Author
        var author = document.createElement('p')
        rdiv.appendChild(author);
        author.innerHTML = results[i][1];
        //Id
        var id = document.createElement('p')
        rdiv.appendChild(id);
        id.innerHTML = results[i][2];
        //Book type
        var type = document.createElement('p')
        rdiv.appendChild(type);
        type.innerHTML = results[i][3];
        //Date Published
        var date = document.createElement('p')
        rdiv.appendChild(date);
        date.innerHTML = results[i][4];
        //Slight variation for the status of a book
        var status = document.createElement('p')
        rdiv.appendChild(status);
        if(results[i][5]){//Checks if the 5th element of the "i"th array of the results array (responsible for keeping track of whether a book is signed out and if so, to whom)
            status.innerHTML = "Checked Out"//Changes the paragraph content to display "Checked Out"
        } else {
            status.innerHTML = "Available"//Changes the paragraph content to display "Available"
        }
        
    }
    var nr = document.createElement('p');//Creates paragraph element
    nr.innerHTML = "No more results :("//Changes the content of the paragraph
    document.getElementsByTagName('body')[0].appendChild(nr);//Appends to body
}