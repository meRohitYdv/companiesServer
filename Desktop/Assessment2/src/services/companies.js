const Company = (require('../../database/models')).company_details;

module.exports.getBySector = async (sectorName) => {
  return await Company.findAll({
    where: {
      sector: sectorName
    },
    attributes: ['id', 'name', 'ceo', 'score']
  });
};

module.exports.updateDetails = async (toUpdate, id) => {
  return await Company.update(toUpdate, {
    where: {
      id: id
    }
  });
};

// Company.destroy({
//   where:{},
//   delete: true
// });