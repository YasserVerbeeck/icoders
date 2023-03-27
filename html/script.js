var ondernemingsnummersAPI = [
	{ 
		ondernemingsnummer1: "test1",
		ondernemingsnummer2: "test2"
	},
	{ 
		ondernemingsnummer1: "test2",
		ondernemingsnummer2: "test1"
	}
]

var testAPI = [
    {ondernemingsnummer:"test1",
     naam:'FC Barcelona',
     omzet:'30000',
     opbrengst:'50000'},

    {ondernemingsnummer:"test2",
     naam:'Real VARdrid', 
     omzet:'550000',
     opbrengst:'790000'},
    
]



function getInfo() {
	var ondernemingsnummer1 = document.getElementById('ondernemingsnummer1').value
	var ondernemingsnummer2 = document.getElementById('ondernemingsnummer2').value

    var table = document.getElementById('api')

	for(var i = 0; i < ondernemingsnummersAPI.length; i++) {
		if(ondernemingsnummer1 == ondernemingsnummersAPI[i].ondernemingsnummer1 && ondernemingsnummer2 == ondernemingsnummersAPI[i].ondernemingsnummer2) {
			console.log(" gegevens zijn juist ")
            
            var row = `<tr>
							<th>${testAPI.indexOf({ondernemingsnummer} = ondernemingsnummer1).naam}:</th><br><br>
							<th><p class="tabel" >omzet: <p>${testAPI[0].omzet}</th><br><br>
							<th><p class="tabel" >opbrengst: <p>${testAPI[0].opbrengst}</th>
					  </tr>
                      <tr>
							<th>${testAPI[1].naam}:</th><br><br>
							<th><p class="tabel" >omzet: <p>${testAPI[1].omzet}</th><br><br>
							<th><p class="tabel" >opbrengst: <p>${testAPI[1].opbrengst}</th>
					  </tr>`
			table = document.getElementById("api").innerHTML += row
			return
            
		}

        else {
            document.getElementById("api").innerHTML += "foute gegevens"
        }
	}
	console.log("incorrect username or password")
}