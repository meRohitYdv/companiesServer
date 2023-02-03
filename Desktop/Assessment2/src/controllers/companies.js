const {getBySector, updateDetails} = require('../services/companies');

module.exports.getByCategory = async (req, res)=>{
  let result = await getBySector(req.params.sector);
  
  result = result.map((element)=>{
    return element.dataValues;
  }).sort((item1, item2)=>{
    return item1.score>item2.score;
  });

  for(let it=0; it<result.length; it++)
    result[it].ranking = it+1;

  res.status(200).send(result);
};

module.exports.updateCompanyDetails = async (req, res)=>{
  const result = await updateDetails(req.body, req.params.id);
  res.status(200).send(`${result[0]} comapany(ies) updated.`);
};
