var Park = function () {
  this.enclosure = [];
}

Park.prototype = {

  add: function (dinosaur) {
    this.enclosure.push(dinosaur);
  },

  remove: function (dinosaur) {
    var index = this.enclosure.indexOf(dinosaur);
    if (index > -1){
      this.enclosure.splice(index,1);
    }
  },

  removeAll: function (name){
    for (var i = 0; i < this.enclosure.length; i++) {

      if (this.enclosure[i].type === name) {
        this.enclosure.splice(i,1);
      }
    }
  },

  findDinosWithOffspringGreaterThan: function (number) {
    var prolifics = [];
    for (var i = 0; i < this.enclosure.length; i++) {
      if (this.enclosure0[i].offspring > number){
        prolifics.push(this.enclosure[i]);
      }
    }
    return prolifics;
  }
};

module.exports = Park;
