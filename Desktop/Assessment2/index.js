const express = require('express');
const app = express();
const port = 8080;
const populateCompanies = require('./src/routes/populateCompanies');
const companies = require('./src/routes/companies');

app.use(express.json());

app.use('/api/save', populateCompanies);
app.use('/companies', companies);

app.listen(port, () => {
  console.log(`Listening to port ${port}....`);
});