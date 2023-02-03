const {getByCategory, updateCompanyDetails} = require('../controllers/companies');
const router = require('express').Router();

router.get('/:sector',getByCategory);
router.put('/:id', updateCompanyDetails);

module.exports = router;