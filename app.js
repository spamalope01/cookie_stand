var hours = [
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm'
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
  stores.push(this); //pushes new stores (instances, when we use NEW STORE) into the stores array
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
};

(Store.render = function() {
  tableView = document.createElement('table');
  tableView.setAttribute('id', 'theGrid');
  var rowOne = document.createElement('tr');
  rowOne.setAttribute('id', 'storeHours');
  var emptyEl = document.createElement('th');
  rowOne.appendChild(emptyEl);
  for(var d = 0; d < hours.length; d++) {
    var tableHours = document.createElement('th');
    tableHours.textContent = hours[d];
    rowOne.appendChild(tableHours);
  }
  var rowOneTotals = document.createElement('th');
  rowOneTotals.textContent = 'Total';
  rowOne.appendChild(rowOneTotals);
  tableView.appendChild(rowOne);
  document.getElementById('theTable').appendChild(tableView);
})();

// should be creating each store row, displaying the store name and the values for hourly cookies.
Store.renderStore = function(tbl, store) {
  Store.hourTotal(store);
  var storeRows = document.createElement('tr');
  var storeName = document.createElement('th');
  storeName.textContent = store.storeName;
  storeRows.appendChild(storeName);
  for(hour in hours) {
    var storeData = document.createElement('td');
    storeData.textContent = Math.floor(store.totals[hour]);
    console.log(storeData);
    storeRows.appendChild(storeData);
  }
  var storeRowsTotals = document.createElement('th');
  storeRowsTotals.textContent = Math.floor(store.grandTotal);
  console.log(storeRowsTotals);
  storeRows.appendChild(storeRowsTotals);
  tbl.appendChild(storeRows);
};

var pikeStore = new Store('Pike Place', 17, 88, 5.2, 'pikeplace');
var seaTacStore = new Store('SeaTac Airport', 6, 24, 1.2, 'seaTacStore');
var southCenterStore = new Store('South Center', 11, 38, 1.9, 'southCtrStore');
var bellevueSqStore = new Store('Bellevue Square', 20, 48, 3.3, 'bellSqStore');
var alkiStore = new Store('Alki', 3, 24, 2.6, 'alki_Store');


// BELOW HERE WE PUT NEW STORE DATA VIA INPUT FORMS.
Store.renderNew = function(obj) {
  var newRow = document.createElement('tr');
  var newStoreNameTd = document.createElement('td');
  newStoreNameTd.textContent = obj.name;
  newRow.appendChild(newStoreNameTd);
  for(hour in hours) {
    var newTdNewStore = document.createElement('td');
    newTdNewStore.textContent = obj.totals[hour];
    newRow.appendChild(newTdNewStore);
  }
  var newTotalTd = document.createElement('td');
  newTotalTd.textContent = obj.grandTotal;
  newRow.appendChild(newTotalTd);

};

// Create new method, store.renderNew = function(obj) { (this makes it part of the constructor)
//   create a row, add a name, add data from the hours, add a total, append
// then append the new row to the table.
// }

// create a variable (formEl) and store the form ID in it
// this will be an event handler, formEl.addEventListener('submit', function(event))
// prevent default;
// var  newName, newMin, newMax, newAvg = parseInt(event.target.newStoreLocaiton.value) DON'T DO FOR STORE NAME, JUST FOR MIN, MAX AND AVG. do parseFloat on the AVG.   (newstorelocation is an id corresponding with that element on the form...so i need to make sure i give/use the id's on each field within the form here. so each variable -newmin, newmax, etc - will be it's own line with event.target.id.value)

// var newShop = new Store(newStoreName, newMinCust...whatever those variables just above - line 154 - are)
// newShop.hourTotal (to generate the hourly totals)();
// take this newShop new object and hand it into the render method
// Store.renderNew(newShop);

// DON'T FORGET TO PARSEINT ON THE MIN, MAX AND AVG WHEN TEXTCONTENTING THEM.  PARSEINT WILL GO AFTER THE = ON TEXTCONTENT.

// THEN APPEND EVEYRHING TO THE ROWS AND THEN EVERYTHING TO THE TABLE.


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
