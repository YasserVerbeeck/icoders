var username = "admin"

var password = "test"


function getLogin() {
	var usernamehtml = document.getElementById("username").value
    var passwordhtml = document.getElementById("password")
    var button;


    if(usernamehtml == username){
        button = document.getElementById("btn").innerHTML += `<a href = "index.html"></a>`
    }
   
    return
}