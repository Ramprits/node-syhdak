import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// var ActiveDirectory = require('activedirectory');
// var config = {
//   url: 'ldap://dc.domain.com',
//   baseDN: 'dc=domain,dc=com',
//   username: 'username@domain.com',
//   password: 'password',
// };
// var ad = new ActiveDirectory(config);
// console.log(ad);
