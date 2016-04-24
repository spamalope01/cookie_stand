// Pike Place Store Object

var pikeStore = {
  storeName: "Pike Place",
  minCust: 17,
  maxCust: 88,
  avgCookie: 5.2,
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
  var pEl = document.getElementById("pikePlStore");
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

pikeStore.render();
seaTacStore.render();
southCenterStore.render();
