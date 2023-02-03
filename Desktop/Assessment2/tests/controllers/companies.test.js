const { getByCategory, updateCompanyDetails } = require('../../src/controllers/companies');
const services = require('../../src/services/companies');
const {describe, it} = require('@jest/globals');

describe('getByCategory', () => {
  it('should provide list of companies of a particular category', async () => {
    const mockReq = {
      params: {
        sector: 'Software'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    const companies = [
      {
        dataValues: {
          id:1,
          name: 'abc',
          score: 20
        }
      },
      {
        dataValues: {
          id:2,
          name: 'def',
          score: 30
        }
      }
    ];

    jest.spyOn(services, 'getBySector').mockReturnValue(companies);

    await getByCategory(mockReq, mockRes);

    expect(mockRes.status).toBeCalledwith(200);
    expect(mockRes.send).toBeCalledWith([
      {
        dataValues: {
          id:2,
          name: 'def',
          score: 30,
          ranking:1
        }
      },
      {
        dataValues: {
          id:1,
          name: 'abc',
          score: 20,
          ranking:2
        }
      },
    ]);

  });
});

describe('updateCompanyDetails', ()=>{
  it('should return number of object updated', async()=>{
    const mockReq = {
      body:{
        'name': 'abc'
      },
      params: {
        id: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  
    jest.spyOn(services, 'updateDetails').mockReturnValue([1]);
  
    await updateCompanyDetails(mockReq, mockRes);
    
    expect(services.updateDetails).toBeCalledWith(mockReq.body, mockReq.params.id);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith(`1 company(ies) updated.`);
  
  });
});