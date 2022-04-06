import 'mocha';
import {expect} from 'chai';
import {Magazine} from '../src/magazine';
import {Reader} from '../src/reader';

const myMagazine = new Magazine(13, 'Hola mundo', 'news', 'Adrian', 3);
const myReader = new Reader(21, 'Jacob', 20);

describe('Practica 8: Ejercicio - PE101', () => {
  describe('Magazine', () => {
    it('Existe la clase Magazine', () => {
      expect(Magazine != undefined).to.be.true;
    });

    it('La clase Magazine tiene atributos para almacenar un identificador, '+
    'nombre, categoria, autor y numeros de revista', () => {
      expect('id' in myMagazine).to.be.true;
      expect('name' in myMagazine).to.be.true;
      expect('category' in myMagazine).to.be.true;
      expect('author' in myMagazine).to.be.true;
      expect('numbers' in myMagazine).to.be.true;
    });

    it('La clase Magazine es un objeto observable', () => {
      expect('subscribe' in myMagazine).to.be.true;
      expect('unsubscribe' in myMagazine).to.be.true;
      expect('notify' in myMagazine).to.be.true;
    });

    it('La clase cuenta con métodos getters para acceder a los atributos', () => {
      expect('getId' in myMagazine).to.be.true;
      expect('getName' in myMagazine).to.be.true;
      expect('getCategory' in myMagazine).to.be.true;
      expect('getAuthor' in myMagazine).to.be.true;
      expect('getNumbers' in myMagazine).to.be.true;
    });

    it('La inicialización de los atributos es correcta', () => {
      expect(myMagazine.getId()).to.be.equal(13);
      expect(myMagazine.getName()).to.be.equal('Hola mundo');
      expect(myMagazine.getCategory()).to.be.equal('news');
      expect(myMagazine.getAuthor()).to.be.equal('Adrian');
      expect(myMagazine.getNumbers()).to.be.equal(3);
    });

    it('Se subscribe correctamente un observador', () => {
      myMagazine.subscribe(myReader);
      //expect(myMagazine.subscribe(myReader)).to.throw('Error');
    });

    it('Se desubscribe correctamente un observador', () => {
      myMagazine.unsubscribe(myReader);
      //expect(myMagazine.unsubscribe(myReader)).to.Throw();
    });

    it('Se notifica a los observadores correctamente de un nuevo numero de revista', () => {
      myMagazine.subscribe(myReader);
      expect(myMagazine.new_number()).to.be.deep.equal(['Soy el lector con nombre Jacoby he observado que la revista Hola mundo ha lanzadoun nuevo número. Este número es el 4']);
    });
  });
  describe('Reader', () => {
    it('Existe la clase Reader', () => {
      expect(Reader != undefined).to.be.true;
    });

    it('La clase Reader tiene atibutos para almacenar un identificador, ' +
    'nombre y edad', () => {
      expect('id' in myReader).to.be.true;
      expect('username' in myReader).to.be.true;
      expect('age' in myReader).to.be.true;
    });

    it('La clase Reader es un objeto observador', () => {
      expect('update' in myReader).to.be.true;
    });

    it('La clase cuenta con métodos getters para acceder a los atributos', () => {
      expect('getId' in myReader).to.be.true;
      expect('getUsername' in myReader).to.be.true;
      expect('getAge' in myReader).to.be.true;
    });

    it('La inicialización de los atributos es correcta', () => {
      expect(myReader.getId()).to.be.equal(21);
      expect(myReader.getUsername()).to.be.equal('Jacob');
      expect(myReader.getAge()).to.be.equal(20);
    });
  });
});