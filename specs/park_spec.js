const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dino5;
  let dino6;
  let park;

  beforeEach(function () {
    dino1 = new Dinosaur('ALGOL 58', 'carnivore', 70);
    dino2 = new Dinosaur('ALGOL 58', 'carnivore', 60);
    dino3 = new Dinosaur('Simula', 'omnivore', 50);
    dino4 = new Dinosaur('Simula', 'omnivore', 40);
    dino5 = new Dinosaur('SNOBOL', 'herbivore', 30);
    dino6 = new Dinosaur('SNOBOL', 'herbivore', 20);
    park = new Park('Jurassic Code', 35);  
  });

  it('should have a name', function () {
    const actual = park.parkName;
    assert.strictEqual(actual, 'Jurassic Code');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 35);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = [];
    assert.deepStrictEqual(actual, park.dinoCollection);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino1);
    const actual = [dino1];
    assert.deepStrictEqual(actual, park.dinoCollection);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.removeDino();
    const actual = [dino1, dino2];
    assert.deepStrictEqual(actual, park.dinoCollection);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
