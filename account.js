const sessionAccount = JSON.parse(sessionStorage.getItem("sessionAccount"))
var libBooks = JSON.parse(localStorage.getItem("libBooks"))

function runtime(){
    checkSession();
    borrowedBooks();
}

function checkSession(){
    if(sessionAccount && sessionAccount[3] === null){
        document.getElementById("accountNumber").innerHTML = `#${sessionAccount[0]}`
    } else if(sessionAccount && sessionAccount[3]){
        location.replace("library_technician_page.html")
    } else{
        location.replace("login.html");
    }
}

function borrowedBooks(){
    if(libBooks){
        for(let i = 0; i<libBooks.length; i++){
            if(parseInt(libBooks[i][5])===parseInt(sessionAccount[0])){
                var rdiv = document.createElement('div');
                rdiv.id = 'block';
                rdiv.className = 'resultd';
                document.getElementsByTagName('body')[0].appendChild(rdiv);
                var title = document.createElement('p');
                rdiv.appendChild(title);
                title.innerHTML = libBooks[i][0];
                var author = document.createElement('p');
                rdiv.appendChild(author);
                author.innerHTML = libBooks[i][1];
                var id = document.createElement('p');
                rdiv.appendChild(id);
                id.innerHTML = libBooks[i][2];
                var type = document.createElement('p');
                rdiv.appendChild(type);
                type.innerHTML = libBooks[i][3];
                var date = document.createElement('p');
                rdiv.appendChild(date);
                date.innerHTML = libBooks[i][4];
            }
        }
    }
}

function logOut(){
    sessionStorage.clear();
    alert("Successfully logged out");
}