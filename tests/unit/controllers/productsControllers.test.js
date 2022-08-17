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
      expect(response.json.calledWith()).to.be.equal(true);
    });

    describe('se não da certo a lista de produtos', () => {
      describe('tudo errado no array de produtos', async () => {
        const response = {};
        const request = {};
        before(() => {
          response.status = sinon.stub().returns(response);
          response.json = sinon.stub().returns();
        });

        it('o status seja 500', async () => {
          await productsController.getAll(request, response);
          expect(response.status.calledWith(500)).to.be.equal(true);
        });

        it('menssage de error', async () => {
          await productsController.getAll(request, response)
          expect(response.json.calledWith('Server error')).to.be.equal(true);
        });        
      } )
    })
    

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

        it('quando chama o id o status e 200', async () => {
          await productsController.getById(request, response);
          expect(response.status.calledWith(200)).to.be.true;
        });

        // it('quando chama o id aparece so um produto', async () => {
        //   await productsController.getById(request, response);
        //   expect(response.json.calledWith()).to.be.true;
        // });

    describe('testando um id errado', () => {
      describe('quando a busqueda do id nao e encontrada', async () => {
        const response = {};
        const request = {};
        data = [];
        request.params = { id: 9 };

        before(() => {
          response.status = sinon.stub().returns(response);
          response.send = sinon.stub().returns(data);
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
        })
       })
    })
  })
})