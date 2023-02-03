const {getByCategory, updateCompanyDetails} = require('../controllers/companies');
const router = require('express').Router();

router.get('/:sector',getByCategory);
router.patch('/:id', updateCompanyDetails);

module.exports = router;