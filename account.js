const sessionAccount = JSON.parse(sessionStorage.getItem("sessionAccount"))

function checkSession(){
    if(sessionAccount && !sessionAccount[3]){
        document.getElementById("accountNumber").innerHTML = `#${sessionAccount[0]}`
    } else if(sessionAccount[3]){
        location.replace("library_technician_page.html")
    } else{
        location.replace("login.html");
    }
}

function logOut(){
    sessionStorage.clear();
    alert("Successfully logged out");
}