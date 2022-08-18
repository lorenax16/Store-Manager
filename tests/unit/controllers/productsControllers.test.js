const sinon = require('sinon');
const { expect } = require('chai');

const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');

describe('testando a camada controller', () => {
  describe('quando chama o get do /products', async () => {
    const response = {};
    const request = {};
    const data = [[
      { id: 1, name: "Martelo de Thor" },
      { id: 2, name: "Traje de encolhimento" },
      { id: 3, name: "Escudo do Capitão América" },
    ]];

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAll').resolves(data);
    });

    after(() => {
      productsService.getAll.restore();
    });

    it('o status seja 200', async () => {
      await productsController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('O array vazio', async () => {
      await productsController.getAll(request, response)
      expect(response.json.calledWith(data)).to.be.equal(true);
    });

    it('O array vazio', async () => {
      await productsController.getAll(request, response)
      expect(response.json.calledWith()).to.be.equal(true);
    });
  });

  describe('testando busca pelo id', () => {
    describe('buscando pelo id no Bd', async () => {
      const response = {};
      const request = {};
      request.params = {};
      const data = [[
        { id: 1, name: "Martelo de Thor" },
      ]]

      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(productsService, 'getById').resolves(data);
      });

      after(() => {
        productsService.getById.restore();
      });

      it('quando chama o id', async () => {
        await productsController.getById(request, response);
        expect(response.json.calledWith(data)).to.be.equal(true);
      });

      it('quando chama o id o status e 200', async () => {
        await productsController.getById(request, response);
        expect(response.status.calledWith(200)).to.be.true;
      });
    });
  });

  describe('testando um id errado', () => {
    describe('quando a busqueda do id nao e encontrada', async () => {
      const response = {};
      const request = {};
      data = [];
      request.params = { id: 9 };

      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(productsService, 'getById').resolves();
      });
      after(() => {
        productsService.getById.restore();
      });

      it('status 404', async () => {
        await productsController.getById(request, response);
        expect(response.status.calledWith(404)).to.be.equal(true);
      });
      it('Id não achado', async () => {
        const message = {
          "message": "Product not found"
        }
        await productsController.getById(request, response);
        expect(response.json.calledWith(message)).to.be.equal(true);
      });

    })
  });

  describe('testando quando cria um produto', () => {
    describe('quando adiciona um produto', () => {
      const response = {};
      const request = {};
      const retorno =
        { id: 1, name: "Martelo de Thor" }
      // before(() => {
      //   response.status = sinon.stub().returns(response);
      //   response.json = sinon.stub().returns();
      //   sinon.stub(productsService, 'add').resolves(dados);
      // });

      // after(() => {
      //   productsService.add.restore();
      // });
      before(() => {
        sinon.restore();
      })
      it('quando é inserido com sucesso', async () => {
        request.body = {
          name: "Martelo de Thor"
        }
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns(retorno);
        sinon.stub(productsService, 'add').resolves(retorno);
        await productsController.add(request, response);
        expect(response.json.calledWith(retorno)).to.be.equal(true);
        expect(response.status.calledWith(201)).to.be.true;
      });
    });
  });
});