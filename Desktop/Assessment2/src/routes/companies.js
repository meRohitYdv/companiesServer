const Company = (require('../../database/models')).company_details;

const getByCategory((req, res)=>{
    const result = await Company.findAll();
});