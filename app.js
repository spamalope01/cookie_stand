var hours = [
  '10am: ',
  '11am: ',
  '12pm: ',
  '1pm: ',
  '2pm: ',
  '3pm: ',
  '4pm: ',
  '5pm: '
];

Store.prototype.totals = [];
Store.prototype.grandTotal = 0;

function Store (storeName, minCust, maxCust, avgCookie, id) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.storeId = id;
};

Store.prototype.getRandom = function(min, max) {
  return Math.random() * (max - min) + min;
};

Store.prototype.hourTotal = function(arr, total, avg, rand, hour) {
  for(var j = 0; j < hours.length; j++) {
    var monkey = Math.floor(this.getRandom(this.minCust, this.maxCust) * this.avgCookie);
    this.totals.push(monkey);
    total += monkey;
  }
  return total;
};

Store.prototype.render = function() {
  Store.prototype.grandTotal = this.hourTotal(this.totals, this.grandTotal, this.avgCookie, this.getRandom, hours);
  var tableEl = document.getElementById('storeTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEL.textCreate = 'testing';
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl);


  var pEl = document.getElementById(this.storeId);
  var ulEl = document.createElement('ul');
  pEl.textContent = this.storeName;

  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + this.totals[i];
    ulEl.appendChild(liEl);
  }
  var liMent = document.createElement('li');
  liMent.textContent = 'TOTALS ' + Store.prototype.grandTotal;
  ulEl.appendChild(liMent);
  pEl.appendChild(ulEl);

};


var pikeStore = new Store('Pike Place', 17, 88, 5.2, 'pikeplace');
var seaTacStore = new Store('SeaTac Airport', 6, 24, 1.2, 'seaTacStore');
var southCenterStore = new Store('South Center', 11, 38, 1.9, 'southCtrStore');
var bellevueSqStore = new Store('Bellevue Square', 20, 48, 3.3, 'bellSqStore');
var alkiStore = new Store('Alki', 3, 24, 2.6, 'alki_Store');

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
