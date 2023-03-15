

fetch('https://ws.uat2.cbso.nbb.be/authentic-archive/{date}/accountingData', {
    method: 'GET',
    // Request headers
    headers: {
        'Cache-Control': 'no-cache',}
})
.then(response => {
    console.log(response.status);
    console.log(response.text());
})
.catch(err => console.error(err));