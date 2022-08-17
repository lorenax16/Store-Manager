const sinon = require("sinon");
const { expect } = require("chai");
// const connection = require("../../../models/connection");
const productsServices = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');

describe('testando a Camada Service', () => {
  describe('todos as products no BD', () => {
    const data = [[
      { id: 1, name: "Martelo de Thor" },
      { id: 2, name: "Traje de encolhimento" },
      { id: 3, name: "Escudo do Capitão América" },
    ]];

    before(async () => {
      sinon.stub(productsModel, 'getAll').resolves([data]);
      
    });
    after(async () => {
      productsModel.getAll.restore();
    });

    it('se listam todos os produtos', async () => {
      const [result] = await productsServices.getAll();
      expect(result).to.be.deep.equal(data);
    });


    describe('chamando o get buscando o id', () => {
      const data1 =
      {
        id: 1,
        name: "Martelo de Thor"
      };
      
      before(async () => {
        sinon.stub(productsModel, 'getById').resolves(data1);
      });

      after(async () => {
        productsModel.getById.restore();
      })
    })

    it('testando busqueda pelo id', async () => {
      const result = await productsServices.getById(1);
      // expect(result).to.be.equal(data1);
    });

    it('quando o id não existe', async () => {
      const message = {
        "message": "Product not found"
      }
      sinon.stub(productsModel, 'getById').resolves(message);
      const result = await productsServices.getById(4);

      expect(result).to.have.key('message');
      expect(result).to.be.a('object');

    })
  });
});