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
    var counter1 = 0;
    var counter2 = 0;
 

    for(var k = 0; k< testAPI.length; k++){
        
 if(ondernemingsnummer1 == testAPI[k].ondernemingsnummer){
        counter1 += k;
    }
 if(ondernemingsnummer2 == testAPI[k].ondernemingsnummer){
        counter2 += k;
        
    }}

    
        

	for(var i = 0; i < testAPI.length; i++) {
		if(testAPI[i].ondernemingsnummer.includes(ondernemingsnummer1) == true, testAPI[i].ondernemingsnummer.includes(ondernemingsnummer2) == true) {
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

        else// if(testAPI[i].ondernemingsnummer.includes(ondernemingsnummer1) == false, testAPI[i].ondernemingsnummer.includes(ondernemingsnummer2) == false) 
        {
            
			
            document.getElementById("errormessage").innerHTML = "foute gegevens";
            console.log("foute gegevens")

            return


        }
	}
	
}
