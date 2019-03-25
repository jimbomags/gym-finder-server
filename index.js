const sqlite3 = require('sqlite3').verbose();

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

db.run('DELETE FROM gyms WHERE company IS NULL');
