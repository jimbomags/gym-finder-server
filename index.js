const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4001;
app.use(cors());

app.get('/', (req, res) => {
  db.all('SELECT * FROM gyms', (error, rows) => {
    res.json(rows);
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

const db = new sqlite3.Database('gyms.db');

const addGym = (company, location, street, postcode) => {
  db.run('INSERT INTO gyms (company, location, street, postcode) VALUES ($company, $location, $street, $postcode)', {
    $company: company,
    $location: location,
    $street: street,
    $postcode: postcode,
  });
};

// addGym('Gymbox', 'Bank', '71 Lombard Street', 'EC3V 9AY');
