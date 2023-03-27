var ondernemingsnummersAPI = [
	{ 
		ondernemingsnummer: "test1",
	},
    {
        ondernemingsnummer: "test2"
    },
    {
        ondernemingsnummer: "BE123"
    },
	{ 
		ondernemingsnummer: "BE456"
	},
    { 
		ondernemingsnummer: "BE789"
	},
    {
        ondernemingsnummer: "BE012"
    }

]

var testAPI = [
    {ondernemingsnummer:"test1",
     naam:'FC Barcelona',
     omzet:'39837,63',
     opbrengst:'49987,71'},

    {ondernemingsnummer:"test2",
     naam:'Real VARdrid', 
     omzet:'5985313,64',
     opbrengst:'790054,76'},

     {ondernemingsnummer:"BE123",
     naam:'CoolBlue', 
     omzet:'124577,95',
     opbrengst:'7956,31'},

     {ondernemingsnummer:"BE456",
     naam:'Bol.com', 
     omzet:'550678,88',
     opbrengst:'79999,99'},

     {ondernemingsnummer:"BE789",
     naam:'AP Hogeschool', 
     omzet:'5507800,87',
     opbrengst:'7978820,13'},

     {ondernemingsnummer:"BE012",
     naam:'iCoders', 
     omzet:'769900751,99',
     opbrengst:'2399876,55'},
    
]



function getInfo() {
	var ondernemingsnummer1 = document.getElementById('ondernemingsnummer1').value
	var ondernemingsnummer2 = document.getElementById('ondernemingsnummer2').value

    var table = document.getElementById('api')
    var counter1;
    var counter2;
 

    for(var k = 0; k< testAPI.length; k++){
        
        if(ondernemingsnummer1 == testAPI[k].ondernemingsnummer){
        counter1 = 0
    }
        else if(ondernemingsnummer1 != testAPI[k].ondernemingsnummer){
        counter1++;
    }

        if(ondernemingsnummer2 == testAPI[k].ondernemingsnummer){
        counter2 = 0
    }
        else if(ondernemingsnummer2 != testAPI[k].ondernemingsnummer){
        counter2++;
        counter2 = counter2
        
    }}
        
    
    


	for(var i = 0; i < ondernemingsnummersAPI.length; i++) {
		if(ondernemingsnummer1 == ondernemingsnummersAPI[i].ondernemingsnummer && ondernemingsnummer2 != ondernemingsnummersAPI[i].ondernemingsnummer) {
			console.log(" gegevens zijn juist ")
            
            var row = `<tr>
							<td>${testAPI[counter1].naam}:</td><br><br>
							<th><p class="tabel" >BE-nummer: <p>${testAPI[counter1].ondernemingsnummer}</th><br><br>
                            <th><p class="tabel" >omzet: <p>${testAPI[counter1].omzet}</th><br><br>
							<th><p class="tabel" >opbrengst: <p>${testAPI[counter1].opbrengst}</th>
					  </tr>
                      <tr>
							<td>${testAPI[counter2].naam}:</td><br><br>
                            <th><p class="tabel" >BE-nummer: <p>${testAPI[counter2].ondernemingsnummer}</th><br><br>
							<th><p class="tabel" >omzet: <p>${testAPI[counter2].omzet}</th><br><br>
							<th><p class="tabel" >opbrengst: <p>${testAPI[counter2].opbrengst}</th>
					  </tr>`
			table = document.getElementById("api").innerHTML += row
			return
            
		}

        else {
            document.getElementById("errormessage").innerHTML = "foute gegevens";
            console.log("foute gegevens")
        }
	}
	
}