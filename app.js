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
var stores = [];
var tableView;

// Store.prototype.totals = [];
// Store.prototype.grandTotal = 0;

function Store (storeName, minCust, maxCust, avgCookie, id) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totals = [];
  this.grandTotal = 0;
  this.storeId = stores.push(this);
  Store.renderStore(tableView, this);
};

Store.prototype.getRandom = function(min, max) {
  return Math.random() * (max - min) + min;
};

Store.hourTotal = function(obj) {
  for(var j = 0; j < hours.length; j++) {
    var monkey = Math.floor(obj.getRandom(obj.minCust, obj.maxCust)) * obj.avgCookie;
    obj.totals.push(monkey);
    obj.grandTotal += monkey;
  }
  // Store.prototype.grandTotal = Store.hourTotal(this.totals, this.grandTotal, this.avgCookie, this.getRandom, hours);
  // return Store.grandTotal;
};

(Store.render = function() {
  var tableView = document.createElement('table');
  tableView.setAttribute('id', 'theGrid');
  var rowOne = document.createElement('tr');
  rowOne.setAttribute('id', 'storeHours');
  var emptyEl = document.createElement('th');
  rowOne.appendChild(emptyEl);
  for(var d = 0; d < hours.length; d++) {
    var tableHours = document.createElement('td');
    tableHours.textContent = hours[d];
    console.log(tableHours);
    rowOne.appendChild(tableHours);
  }
  var rowOneTotals = document.createElement('th');
  rowOneTotals.textContent = "Totals";
  rowOne.appendChild(rowOneTotals);
  tableView.appendChild(rowOne);
  document.getElementById('theTable').appendChild(tableView);
})();

Store.renderStore = function(tbl, store) {
  var storeRows = document.createElement('tr');
  storeRows.setAttribute('id', obj.storeId);
  for(e = 0; e < obj.totals[i]; e++) {
    var storesData = document.createElement('td') + obj.totals[i];
    storeRows.appendChild(storesData);
    var storeRowsTotals = document.createElement('th');
    storeRows.appendChild(storeRowsTotals);
    tableView.appendChild(storeRows);
  }
};

Store.renderNew = function(name, minimum, maximum, average) {
  var newStore = document.getElementById('theGrid');
  newStore.renderStore('theGrid', Store);
};

//
//   var pEl = document.getElementById(this.storeId);
//   var ulEl = document.createElement('ul');
//   pEl.textContent = this.storeName;
//
//   for (var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + this.totals[i];
//     ulEl.appendChild(liEl);
//   }
//   var liMent = document.createElement('li');
//   liMent.textContent = 'TOTALS ' + Store.prototype.grandTotal;
//   ulEl.appendChild(liMent);
//   pEl.appendChild(ulEl);
//
// };

var pikeStore = new Store('Pike Place', 17, 88, 5.2, 'pikeplace');
var seaTacStore = new Store('SeaTac Airport', 6, 24, 1.2, 'seaTacStore');
var southCenterStore = new Store('South Center', 11, 38, 1.9, 'southCtrStore');
var bellevueSqStore = new Store('Bellevue Square', 20, 48, 3.3, 'bellSqStore');
var alkiStore = new Store('Alki', 3, 24, 2.6, 'alki_Store');


// var stores = [
//   pikeStore,
//   alkiStore,
//   seaTacStore,
//   bellevueSqStore,
//   southCenterStore
// ];
// for(var k = 0; k < stores.length; k++) {
//   stores[k].render();
// }
