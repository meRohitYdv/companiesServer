const express = require('express');
const router = express.Router();
const populateCompanies = require('../controllers/populateCompanies');


router.post('/', populateCompanies);


module.exports = router;