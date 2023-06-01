var username = "admin"

var password = "test"


function getInfo() {
	var usernamehtml = document.getElementById("username").value
    var passwordhtml = document.getElementById("password")
    var loginerrormessage = document.getElementById("loginerror")
    var button;



    if(usernamehtml == username){
        
        location.href("landing.html")

    }
    else
    {
        loginerrormessage = document.getElementById("loginerror") += `gebruikersnaam en/of wachtwoord komen niet overeen!`
    }
   
    return
}