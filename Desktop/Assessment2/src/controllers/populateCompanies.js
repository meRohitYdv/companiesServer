const axios = require('axios');
const db = require('../../database/models');
const company = db.company_details;



module.exports = async (req, res) => {
  const response = await axios.get(req.body.url);

  let data = response.data;
  data = data.split('\n');
  data.shift();

  data.forEach(async element => {
    element = element.split(',');

    const id = element[0];
    const sector = element[1];
    
    const responseById = (await axios.get(`http://54.167.46.10/company/${id}`)).data;
    const responseBySector = (await axios.get(`http://54.167.46.10/sector?name=${sector}`)).data;
    
    const newEntry = {
      id: responseById.id,
      name: responseById.name,
      ceo: responseById.ceo,
      tags: responseById.tags[0],
      sector: sector
    };

    const performanceObject = responseBySector.find(element=>element.companyId===newEntry.id).performanceIndex;

    newEntry.cpi = Number(performanceObject[0].value);
    newEntry.cf = Number(performanceObject[0].value);
    newEntry.mau = Number(performanceObject[0].value);
    newEntry.roic = Number(performanceObject[0].value);
    newEntry.score = Number(((newEntry.cpi * 10) + (newEntry.cf / 10000) + (newEntry.mau * 10) + newEntry.roic) / 4);

    await company.create(newEntry);
    res.status(200).send();
  });
};

// company.destroy({
//   where:{},
//   delete: true
// });



