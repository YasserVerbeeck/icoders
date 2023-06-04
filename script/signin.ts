import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import ejs from 'ejs';
import path from 'path';

const app = express();
const port = 3001;

// MongoDB-verbinding URI
const uri =
  'mongodb+srv://s141765:Mei-2001@cluster0.bvejg9c.mongodb.net/mydatabase?retryWrites=true&w=majority';

// MongoDB-client
const client = new MongoClient(uri);

// Middleware om de gegevens van de "submit" enz. te verwerken
app.use(express.urlencoded({ extended: true }));

// EJS instellen als de templating engine (HBS>EJS maar ja)
app.set('view engine', 'ejs');

// Statische bestanden serveren + source: Flowstack
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req: Request, res: Response) => {
  res.render('login');
});

// Andere routes
app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/error', (req, res) => {
  res.render('error');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/landing', (req, res) => {
  res.render('landing');
});

// Login route
app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Valideer username en password in de database

  if (username && password) {
    client.connect((err) => {
      if (err) {
        console.error('Fout bij het verbinden met de database:', err);
        res.send('Er is een fout opgetreden bij het verbinden met de database.');
        return;
      }

      const db = client.db('iCoders');
      const collection = db.collection('db');

      collection.findOne({ username, password }, (err, result) => {
        if (err) {
          console.error('Fout bij het zoeken naar de gebruiker:', err);
          res.send('Er is een fout opgetreden bij het zoeken naar de gebruiker.');
          return;
        }

        if (result) {
          res.render('landing');
        } else {
          res.send('Ongeldige gebruikersnaam of wachtwoord.');
        }
      });
    });
  } else {
    res.send('Gebruikersnaam en wachtwoord zijn vereist.');
  }
});

// Signup route
app.post('/signup', (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  client.connect((err) => {
    if (err) {
      console.error('Fout bij het verbinden met de database:', err);
      res.send('Er is een fout opgetreden bij het verbinden met de database.');
      return;
    }

    const db = client.db('iCoders');
    const collection = db.collection('db');

    const newUser = {
      username,
      email,
      password
    };

    collection.insertOne(newUser, (err, result) => {
      if (err) {
        console.error('Fout bij het toevoegen van de gebruiker:', err);
        res.send('Er is een fout opgetreden bij het toevoegen van de gebruiker.');
        return;
      }

      res.send('Bedankt voor het registreren!');
    });
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server gestart op http://localhost:${port}`);
});
