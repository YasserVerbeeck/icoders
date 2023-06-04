import axios, { AxiosResponse } from 'axios';

const apiUrl = 'https://ws.uat2.cbso.nbb.be/authentic/deposit/0203201340/accountingData';
const requestId = 'a2882e4a-ed32-bd23-4f18-a350a9573510';
const subscriptionKey = 'a4c76c41e2e6486f9407f4cb03e72b4e';

const headers = {
  'X-Request-Id': requestId,
  'NBB-CBSO-Subscription-Key': subscriptionKey,
  'Accept': 'application/pdf'
};

axios.get(apiUrl, { headers })
  .then((response: AxiosResponse) => {
    console.log(response.status);
    console.log(response.data);
    // Verwerk de verkregen gegevens hier

    // Voer een tweede API-oproep uit
    const secondApiUrl = 'https://ws.uat2.cbso.nbb.be/authentic/deposit/0203201340/accountingData';
    axios.get(secondApiUrl)
      .then((secondResponse: AxiosResponse) => {
        console.log(secondResponse.status);
        console.log(secondResponse.data);

        // Zoek naar het "EnterpriseNumber" in de JSON van de tweede API-oproep
        const enterpriseNumber = secondResponse.data.EnterpriseNumber;
        console.log('Enterprise Number:', enterpriseNumber);

        // Verwerk de verkregen gegevens van de tweede oproep hier
      })
      .catch((secondError: any) => {
        console.error(secondError);
        // Handel eventuele fouten af die zijn opgetreden tijdens de tweede oproep
      });
  })
  .catch((error: any) => {
    console.error(error);
    // Handel eventuele fouten af die zijn opgetreden tijdens het verzoek
  });
