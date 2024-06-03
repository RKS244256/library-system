const sessionAccount = sessionStorage.getItem("sessionAccount")

function checkSession(){
    if(sessionStorage.getItem("sessionAccount")){
        document.getElementById("accountNumber").innerHTML = `#${sessionAccount[0]}`
    } else{
        location.replace("login.html");
    }
}

function logOut(){
    sessionStorage.clear();
    alert("Successfully logged out");
}