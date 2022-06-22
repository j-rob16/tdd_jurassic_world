const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;

  beforeEach(function() {
    park = new Park('Jurrasic Park', 50);
    dino1 = new Dinosaur('T-Rex', 'carnivore', 1400);
    dino2 = new Dinosaur('Pterodactyl', 'carnivore', 600);
    dino3 = new Dinosaur('Triceratops', 'herbavore', 1000);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dino1);
    const actual = park.dinosaurs[0]
    assert.strictEqual(actual, dino1)
  });

  // Help/Advice needed here. When removing middle elements, an extra comma between array elements stops the test from passing?
  // eg. removeDino(2), assert... [dino1, dino3]
  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.removeDino(dino3);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    const actual = park.findHighestViews();
    assert.strictEqual(actual, dino1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.findDino('T-Rex');
    assert.deepStrictEqual(actual, [dino1])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    const actual = park.findOneDayVisitors();
    assert.strictEqual(actual, 3000)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    const actual = park.findYearlyVisitors();
    assert.strictEqual(actual, 1095000);
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    const actual = park.findYearlyRevenue();
    assert.strictEqual(actual, 54750000);
  });

});
