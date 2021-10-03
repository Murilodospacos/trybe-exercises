const { expect } = require('chai');
const { exerciseOne }  = require('../ex01');

describe('Executa a funcão exerciseOne', () => {
  describe('Quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = exerciseOne(10);

        expect(resposta).to.be.a('string');
      });
      it('é igual a "positivo"', () => {
        const resposta = exerciseOne(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('Quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = exerciseOne(-10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = exerciseOne(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('Quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é igual uma "string"', () => {
        const resposta = exerciseOne(0);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro', () => {
        const resposta = exerciseOne(0);

        expect(resposta).to.be.equal('neutro');
      });
    });
  });
  describe('quando o parâmetro passado não é um número', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = exerciseOne('Murilo');

        expect(resposta).to.be.a('string');
      });

      it('é igual a "o parâmetro"', () => {
        const resposta = exerciseOne('Murilo');

        expect(resposta).to.be.equals('o parâmetro deve ser um número');
      });
    });
  });
});