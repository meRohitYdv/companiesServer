const Company = (require('../../database/models')).company_details;

module.exports.getByCategory = async (req, res)=>{
  let result = await Company.findAll({
    where:{
      sector: req.params.sector
    },
    attributes: ['id', 'name', 'ceo', 'score']
  });
  
  result = result.map((element)=>{
    return element.dataValues;
  }).sort((item1, item2)=>{
    return item1.score>item2.score;
  });

  for(let it=0; it<result.length; it++)
    result[it].ranking = it+1;

  res.status(200).send(result);
};


