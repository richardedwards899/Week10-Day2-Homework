var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('Park test', function () {

  var park;
  var dino1;
  var dino2;
  var dino3;

  beforeEach(function () {
    park = new Park();
    dino1 = new Dinosaur({ type: 'tyrannosaurus', offspring: 1 });
    dino2 = new Dinosaur({ type: 'velociraptor', offspring: 3 });
    dino3 = new Dinosaur({ type: 'triceratops', offspring: 5 });
  });

  it('should have no dinosaurs to begin with', function () {
    assert.strictEqual(0, park.enclosure.length);
  });

  it('should accept a dinosaur', function () {
    park.add(dino1);
    assert.strictEqual(1, park.enclosure.length);
  });

  it('should accept multiple dinosaurs', function () {
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);

    assert.strictEqual(3, park.enclosure.length);
  });

  it('should remove a dinosaur', function () {
    park.add(dino1);
    park.remove(dino1);
    assert.strictEqual(0, park.enclosure.length);
  });

  it('should remove a dinosaur', function () {
    park.add(dino1);
    park.remove(dino2);
    assert.strictEqual(1, park.enclosure.length);
  });

  it('should remove all dinosaurs of a particular type', function () {
    park.add(dino1);
    park.removeAll('tyrannosaurus');
    assert.strictEqual(0, park.enclosure.length);
  });

  it('should find all dinosars with offspring > 2', function () {
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);

    var prolificDinos = park.findDinosWithOffspringGreaterThan(2);
    assert.strictEqual(2, prolificDinos.length);
    assert.strictEqual(prolificDinos[0].type==='velociraptor');
    assert.strictEqual(prolificDinos[1].type==='triceratops');
  });

});
