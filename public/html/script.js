






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

var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];



function getInfo() {
    var ondernemingsnummer1 = document.getElementById('ondernemingsnummer1').value;
    var ondernemingsnummer2 = document.getElementById('ondernemingsnummer2').value;
  
    var table = document.getElementById('api');
    table.innerHTML = '';
  
    var match1 = false;
    var match2 = false;
  
    for (var i = 0; i < testAPI.length; i++) {
      if (testAPI[i].ondernemingsnummer === ondernemingsnummer1) {
        var row = `<tr>
          <td>${testAPI[i].naam}:</td><br><br>
          <th><p class="tabel">BE-nummer: <p>${testAPI[i].ondernemingsnummer}</th><br><br>
          <th><p class="tabel">omzet: <p>${testAPI[i].omzet}</th><br><br>
          <th><p class="tabel">opbrengst: <p>${testAPI[i].opbrengst}</th>
        </tr>`;
        table.innerHTML += row;
        match1 = true;
      }
  
      if (testAPI[i].ondernemingsnummer === ondernemingsnummer2) {
        var row = `<tr>
          <td>${testAPI[i].naam}:</td><br><br>
          <th><p class="tabel">BE-nummer: <p>${testAPI[i].ondernemingsnummer}</th><br><br>
          <th><p class="tabel">omzet: <p>${testAPI[i].omzet}</th><br><br>
          <th><p class="tabel">opbrengst: <p>${testAPI[i].opbrengst}</th>
        </tr>`;
        table.innerHTML += row;
        match2 = true;
      }
    }
  
    if (!match1) {
      table.innerHTML += "<tr><td colspan='4'>Business with ondernemingsnummer1 not found</td></tr>";
    }
    if (!match2) {
      table.innerHTML += "<tr><td colspan='4'>Business with ondernemingsnummer2 not found</td></tr>";
    }
    var currentDate = new Date().toLocaleDateString();
    var searchEntry = { ondernemingsnummer1: ondernemingsnummer1, ondernemingsnummer2: ondernemingsnummer2, date: currentDate };
    searchHistory.push(searchEntry);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("popupBtn");
  button.addEventListener("click", function() {
    var newWindow = window.open("", "_blank", "width=400,height=300");
  
      // Write content to the new window
      var historyContent = "<h2>Search History</h2>";
    for (var i = 0; i < searchHistory.length; i++) {
      historyContent += `<p>Ondernemingsnummer 1: ${searchHistory[i].ondernemingsnummer1}</p>`;
      historyContent += `<p>Ondernemingsnummer 2: ${searchHistory[i].ondernemingsnummer2}</p>`;
      historyContent += `<p>Date: ${searchHistory[i].date}</p><br>`;
    }
    newWindow.document.write(historyContent);
  
      // Close the new window after 3 seconds (optional)
    });
  });
