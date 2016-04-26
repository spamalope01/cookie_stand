// Pike Place Store Object
var hours = [
  "10am: ",
  "11am: ",
  "12pm: ",
  "1pm: ",
  "2pm: ",
  "3pm: ",
  "4pm: ",
  "5pm: "
];
var pikeStore = {
  storeName: "Pike Place",
  minCust: 17,
  maxCust: 88,
  avgCookie: 5.2,
  totals: [],
  grandTotal: 0,

  getRandom: function(min, max) {
    return Math.random() * (max - min) + min;
  },

  hourTotal: function(arr, totals, avg, rand, hour) {
    console.log(totals);
    for(var j = 0; j < hour.length; j++) {
      var ran = Math.floor(rand(this.minCust, this.maxCust) * avg);
      arr.push(ran);
      console.log(totals, ran);
      totals += ran;
    }
  },

  render: function() {
    this.hourTotal(this.totals, this.grandTotal, this.avgCookie, this.getRandom, hours);
    var pEl = document.getElementById("pikePlStore");
    var ulEl = document.createElement('ul');
    pEl.textContent = this.storeName;

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.totals[i];
      ulEl.appendChild(liEl);
    }
    var liMent = document.createElement('li');
    liMent.textContent = "TOTALS " + this.grandTotal;
    ulEl.appendChild(liMent);
    pEl.appendChild(ulEl);

    }
};

// SeaTac Store Object
var seaTacStore = {
  storeName: "SeaTac Airport",
  minCust: 6,
  maxCust: 24,
  avgCookie: 1.2,
  totals: [],
  grandTotal: 0,
  hours: [
    "10am: ",
    "11am: ",
    "12pm: ",
    "1pm: ",
    "2pm: ",
    "3pm: ",
    "4pm: ",
    "5pm: "
],

  getRandom: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },

  hourTotal: function() {
  for(var j = 0; j < this.hours.length; j++) {
    var ran = Math.floor(this.getRandom() * this.avgCookie);
    this.totals.push(ran);
    this.grandTotal += ran;
  }
  },

  render: function() {
  this.hourTotal();
  var pEl = document.getElementById("seaTacStore");
  var ulEl = document.createElement('ul');

  for (var i = 0; i < this.hours.length; i++) {
    var liEl = document.createElement('li');
    pEl.textContent = this.storeName;
    liEl.textContent = this.hours[i] + this.totals[i];
    ulEl.appendChild(liEl);
  }
  var liMent = document.createElement('li');
  liMent.textContent = "TOTALS " + this.grandTotal;
  ulEl.appendChild(liMent);
  pEl.appendChild(ulEl);

  }
};

// Southcenter Store Object
var southCenterStore = {
  storeName: "South Center",
  minCust: 11,
  maxCust: 38,
  avgCookie: 1.9,
  totals: [],
  grandTotal: 0,
  hours: [
    "10am: ",
    "11am: ",
    "12pm: ",
    "1pm: ",
    "2pm: ",
    "3pm: ",
    "4pm: ",
    "5pm: "
],

  getRandom: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },

  hourTotal: function() {
  for(var j = 0; j < this.hours.length; j++) {
    var ran = Math.floor(this.getRandom() * this.avgCookie);
    this.totals.push(ran);
    this.grandTotal += ran;
  }
  },

  render: function() {
  this.hourTotal();
  var pEl = document.getElementById("southCtrStore");
  var ulEl = document.createElement('ul');

  for (var i = 0; i < this.hours.length; i++) {
    var liEl = document.createElement('li');
    pEl.textContent = this.storeName;
    liEl.textContent = this.hours[i] + this.totals[i];
    ulEl.appendChild(liEl);
  }
  var liMent = document.createElement('li');
  liMent.textContent = "TOTALS " + this.grandTotal;
  ulEl.appendChild(liMent);
  pEl.appendChild(ulEl);

  }
};

// Bellevue Square Store Object
var bellevueSqStore = {
  storeName: "Bellevue Square",
  minCust: 20,
  maxCust: 48,
  avgCookie: 3.3,
  totals: [],
  grandTotal: 0,
  hours: [
    "10am: ",
    "11am: ",
    "12pm: ",
    "1pm: ",
    "2pm: ",
    "3pm: ",
    "4pm: ",
    "5pm: "
],

  getRandom: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },

  hourTotal: function() {
  for(var j = 0; j < this.hours.length; j++) {
    var ran = Math.floor(this.getRandom() * this.avgCookie);
    this.totals.push(ran);
    this.grandTotal += ran;
  }
  },

  render: function() {
  this.hourTotal();
  var pEl = document.getElementById("bellSqStore");
  var ulEl = document.createElement('ul');

  for (var i = 0; i < this.hours.length; i++) {
    var liEl = document.createElement('li');
    pEl.textContent = this.storeName;
    liEl.textContent = this.hours[i] + this.totals[i];
    ulEl.appendChild(liEl);
  }
  var liMent = document.createElement('li');
  liMent.textContent = "TOTALS " + this.grandTotal;
  ulEl.appendChild(liMent);
  pEl.appendChild(ulEl);

  }
};

// Alki Store Object
var alkiStore = {
  storeName: "Alki",
  minCust: 3,
  maxCust: 24,
  avgCookie: 2.6,
  totals: [],
  grandTotal: 0,
  hours: [
    "10am: ",
    "11am: ",
    "12pm: ",
    "1pm: ",
    "2pm: ",
    "3pm: ",
    "4pm: ",
    "5pm: "
],

  getRandom: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },

  hourTotal: function() {
  for(var j = 0; j < this.hours.length; j++) {
    var ran = Math.floor(this.getRandom() * this.avgCookie);
    this.totals.push(ran);
    this.grandTotal += ran;
  }
  },

  render: function() {
  this.hourTotal();
  var pEl = document.getElementById("alki_Store");
  var ulEl = document.createElement('ul');

  for (var i = 0; i < this.hours.length; i++) {
    var liEl = document.createElement('li');
    pEl.textContent = this.storeName;
    liEl.textContent = this.hours[i] + this.totals[i];
    ulEl.appendChild(liEl);
  }
  var liMent = document.createElement('li');
  liMent.textContent = "TOTALS " + this.grandTotal;
  ulEl.appendChild(liMent);
  pEl.appendChild(ulEl);

  }
};

var stores = [
  pikeStore,
  alkiStore,
  seaTacStore,
  bellevueSqStore,
  southCenterStore
];
for(var k = 0; k < stores.length; k++) {
  stores[k].render();
}

// pikeStore.render();
// seaTacStore.render();
// southCenterStore.render();
// bellevueSqStore.render();
// alkiStore.render();
