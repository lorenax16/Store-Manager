const sinon = require("sinon");
const { expect } = require("chai");
// const connection = require("../../../models/connection");
const productsServices = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');
const connection = require("../../../models/connection");

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
  });

  describe('testando busqueda pelo id', () => {
    it('quando a busqueda da certo', async () => {
      sinon.restore();
      sinon.stub(productsModel, 'getById').resolves({
        id: 1,
        name: "Martelo de Thor"
      });
      const result = await productsServices.getById(1);
      // console.log(result);
      expect(result).to.be.a('object');
      sinon.restore();
    });
  });

  describe('quando criam um produto', () => {
    before(() => {
      sinon.stub(productsModel, 'add').resolves({ id: 1, name: 'pantera' })
    });

    after(() => {
      productsModel.add.restore();
    });

    it('se cria um objeto', async () => {
      const result = await productsServices.add();
      expect(result).to.be.an('object');
    });
    it('o objeto não esteja vazio', async () => {
      const result = await productsServices.add();
      expect(result).to.not.empty;
    });

  });
});

