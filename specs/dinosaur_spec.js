var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function () {

	var dino1;

	beforeEach(function () {
		dino1 = new Dinosaur({ type: 'tyrannosaurus', offspring: 1 });
	});

	it('should have a type', function () {
		assert.strictEqual('tyrannosaurus', dino1.type);
	});

  it('should have a figure for offspring', function () {
		assert.strictEqual(1, dino1.offspring);
	});

});
