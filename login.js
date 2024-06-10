const accounts = JSON.parse(localStorage.getItem("accounts"));//Parses the value from the key "accounts" from session storage before storing it in a variable called accounts

function login(accountInfo){
    let exists;//Declares a new variable which is going to be declared and changed
    if(accounts){//Checks whether the accounts are actually there or if it's just a null value.
        for (let i = 0; i<accounts.length; i++){//Iterates through the accounts array
            if(accounts[i][0] === parseInt(accountInfo.account.value)){//Checks if the 0th element of the "i"th array in the accounts array (responsible for storing user ids) is equal to the account identifier provided by the user
                exists = i //Defines exists as i
            } else if(accounts[i][1].toLowerCase() === accountInfo.account.value){//Checks if the 1st element of the "i"th array in the accounts array (responsible for storing user emails) is equal to the account identifier provided by the user
                exists = i//Defines exists as i
            }
        }
        if(exists || exists === 0){//Checks if exists is defined or 0 (which is evaluated as falsy)
            if(accounts[exists][2] === accountInfo.password.value){//Checks if the 2nd element of the "exists"th array in the account array (responsible for storing passwords) matches the password given by the user
                alert("Signed in!");//Tells the user they're logged in.
                var account = JSON.stringify([accounts[exists][0], accounts[exists][1], accounts[exists][2], accounts[exists][3]])//Creates a new string with all relevant account information and stores it in the account variable.
                sessionStorage.setItem("sessionAccount", account);//Stores the account variable in session storage under the key account
                location.replace('account.html')//Redirects to the account page.
            }else{
                alert('Incorrect password.\nPasswords are case sensitive.\nPlease try again.');//Tells the user that they entered the wrong password.
            }
        } else{
            alert('Account does not exist.\nPlease double check spellings and account information.')//Tells the user the account they specified does not exist.
        }
    } 
}
function checkSession(){//Declares the checkSession function
    if(sessionStorage.getItem("sessionAccount")){//Checks whether an account/sessionalready  exists in session storage
        if(JSON.parse(sessionStorage.getItem("sessionAccount"))[3]){//Checks whether the 3rd element of the account in session storage (responsible for storing whether the account belongs to a regular user or a library technician) is true (is a library technician)
            location.replace('library_technician_page.html')//Redirects to the library technician page
        } else{
            location.replace('account.html')//Redirects to the account page
        }
    }
}