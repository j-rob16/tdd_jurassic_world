const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = []
};

Park.prototype.addDino = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDino = function(dinosaur) {
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === dinosaur.species) {
      this.dinosaurs.pop(i);
    }
  }
};

Park.prototype.findHighestViews = function() {

  let highestViewedDino = this.dinosaurs[0];

  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].guestsAttractedPerDay > highestViewedDino.guestsAttractedPerDay) {
      highestViewedDino = this.dinosaurs[i];
    }
  }

  return highestViewedDino;
};

Park.prototype.findDino = function(species) {
  const foundDinos = [];
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === species) {
      foundDinos.push(this.dinosaurs[i])
    }
  }
  return foundDinos;
};

Park.prototype.findOneDayVisitors = function() {
  let totalVisitors = 0;
  for (let i = 0; i < this.dinosaurs.length; i++) {
    totalVisitors += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return totalVisitors;
};

Park.prototype.findYearlyVisitors = function() {
  const oneDay = this.findOneDayVisitors();
  return oneDay * 365;
};

Park.prototype.findYearlyRevenue = function() {
  const oneYear = this.findYearlyVisitors();
  return oneYear * this.price;
};

Park.prototype.removeAllOfSpecies = function(species) {
  for (let i = this.dinosaurs.length-1; i >= 0; i--) {
    if (this.dinosaurs[i].species === species) {
      this.dinosaurs.splice(i, 1);
    }
  }
};

Park.prototype.getDietObject = function() {
  const dietTemplate = {
    carnivore: 0,
    herbivore: 0,
    omnivore: 0
  };
  for (let i = 0; i < this.dinosaurs.length; i++) {
    let dinosaurDiet = this.dinosaurs[i].diet;
    if (dinosaurDiet === 'carnivore') {
      dietTemplate.carnivore += 1;
    } else if (dinosaurDiet === 'herbivore') {
      dietTemplate.herbivore += 1;
    } else if (dinosaurDiet === 'omnivore') {
      dietTemplate.omnivore += 1;
    }
  }
  return dietTemplate;
};

module.exports = Park;