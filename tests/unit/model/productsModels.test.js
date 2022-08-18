const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('testando a Camada model', () => {
  describe('quando se chama todos os produtos', () => {
    const data = [[
      { id: 1, name: "Martelo de Thor" },
      { id: 2, name: "Traje de encolhimento" },
      { id: 3, name: "Escudo do Capitão América" },
    ]];

    before(async () => {
      sinon.stub(connection, 'execute').resolves(data);
    });
    after(async () => {
      connection.execute.restore();
    });

    it('retorna um array de produtos', async () => {
      const result = await productsModel.getAll();
      expect(result).to.be.an('array');
    });

  });

  describe('chamando o get no /products:id', () => {
    const data = [[{ id: 1, name: "Martelo de Thor" }]];
    const id = 1;

    before(async () => {
      sinon.stub(connection, 'execute').resolves(data);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('retorna um objeto', async () => {
      const result = await productsModel.getById(id);
      expect(result).to.be.an('object');
    })
  });

  describe('adicionando produtos', () => {
    describe('testando add', () => {
      const data = [{ name: "Martelo de Thor" }];

      before(async () => {
        sinon.stub(connection, 'execute').resolves(data);
      });
      after(async () => {
        connection.execute.restore();
      });

      it('retorna um objeto', async () => {
        const response = await productsModel.add(data);

        expect(response).to.be.a('object')
      });
    })
  })
})