const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');


describe('Insere um novo filme no BD - Model', () => {

  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  const DBServer = new MongoMemoryServer();
  
  before(async () => {
    const URLMock = await DBServer.getUri();

    const connectionMock = await MongoClient
      .connection(URLMock, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    sinon.stub(mongoConnection, 'connection').resolves(connectionMock);
  })

  after(async () => {
    mongoConnection.connection.restore();
    await DBServer.stop();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});
