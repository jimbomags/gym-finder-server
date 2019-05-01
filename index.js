const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4001;
app.use(cors());

app.get('/', (req, res) => {
  const gymData = fs.readFileSync('gyms.json', 'utf8', (err, data) => {
    if (err) throw err;
    return `${data}`;
  });
  res.json(JSON.parse(gymData));
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


const addGym = (company, location, street, postcode) => {
  let oldGymData = fs.readFileSync('gyms.json', 'utf8', (err, data) => {
    if (err) throw err;
    return `${data}`;
  });
  oldGymData = JSON.parse(oldGymData);

  const data = JSON.stringify([...oldGymData, {
    company,
    location,
    street,
    postcode,
  }]);
  fs.writeFileSync('gyms.json', data, 'utf8', (err) => {
    if (err) throw err;
    console.log('Gyms successfully updated');
  });
};

// addGym('Gymbox', 'Cannon Street', '1 Suffolk Lane', 'EC4R 0AT');
// addGym('Gymbox', 'Covent Garden', '42 – 49 St Martins Lane', 'WC2N 4EJ');
// addGym('Gymbox', 'Elephant & Castle', '38 New Kent Road', 'SE1 6TJ');
// addGym('Gymbox', 'Bank', '71 Lombard Street', 'EC3V 9AY');
// addGym('Gymbox', 'Farringdon', '12A Leather Lane', 'EC1N 7SS');
// addGym('Gymbox', 'Holborn', '100 High Holborn', 'WC1V 6RD');
// addGym('Gymbox', 'Old Street', '201A Old Street', 'EC1V 9NP');
// addGym('Gymbox', 'Victoria', '123 Victoria Street', 'SW1E 6DE');
// addGym('Gymbox', 'Westfield London', 'Westfield Shopping Centre', 'W12 7GF');
// addGym('Gymbox', 'Westfield Stratford', 'Westfield Stratford City', 'E20 1GL');

