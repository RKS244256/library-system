const accounts = JSON.parse(localStorage.getItem("accounts"));

function login(accountInfo){
    let exists;
    if(accounts){
        for (let i = 0; i<accounts.length; i++){
            if(accounts[i][0] === parseInt(accountInfo.account.value)){
                exists = i
            } else if(accounts[i][1].toLowerCase() === accountInfo.account.value){
                exists = i
            }
        }
        console.log(exists || exists === 0)
        if(exists || exists === 0){
            if(accounts[exists][2] === accountInfo.password.value){
                alert("Signed in!");
                var account = [accounts[exists][0], accounts[exists][1], accounts[exists][2]]
                sessionStorage.setItem("sessionAccount", account);
                location.replace('account.html')
            }else{
                alert('Incorrect password.\nPasswords are case sensitive.\nPlease try again.');
            }
        } else{
            alert('Account does not exist.\nPlease double check spellings and account information.')
        }
    } 
}
function checkSession(){
    if(sessionStorage.getItem("sessionAccount", accounts)){
        location.replace("account.html");
    }
}