// Pike Place Store Object
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

function Store (storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
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
  var pEl = document.getElementById('pikePlStore');
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

var pikeStore = new Store('Pike Place', 17, 88, 5.2);
var seaTacStore = new Store('SeaTac Airport', 6, 24, 1.2);
var southCenterStore = new Store('South Center', 11, 38, 1.9);
var bellevueSqStore = new Store('Bellevue Square', 20, 48, 3.3);
var alkiStore = new Store('Alki', 3, 24, 2.6);

// pikeStore.render();
// seaTacStore.render();
// southCenterStore.render();
// bellevueSqStore.render();
// alkiStore.render();

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
// need to figure out what i have to pass in as arguments when calling pikeStore.render.  that is the first domino, so what do i pass in...how do i get values to pass in and flow through the other methods?   and right now line 51 is giving me 'avgCookie' is not defined when i refresh the browser.




// // SeaTac Store Object
// var seaTacStore = {
//   storeName: 'SeaTac Airport',
//   minCust: 6,
//   maxCust: 24,
//   avgCookie: 1.2,
//   totals: [],
//   grandTotal: 0,
//
//   getRandom: function(min, max) {
//     return Math.random() * (max - min) + min;
//   },
//
//   hourTotal: function(arr, total, avg, rand, hour) {
//     console.log(total);
//     for(var j = 0; j < hour.length; j++) {
//       var ran = Math.floor(rand(this.minCust, this.maxCust) * avg);
//       arr.push(ran);
//       console.log(total, ran, this.grandTotal);
//       total += ran;
//     }
//     return total;
//   },
//
//   render: function() {
//     this.grandTotal = this.hourTotal(this.totals, this.grandTotal, this.avgCookie, this.getRandom, hours);
//     var pEl = document.getElementById('seaTacStore');
//     var ulEl = document.createElement('ul');
//     pEl.textContent = this.storeName;
//
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.totals[i];
//       ulEl.appendChild(liEl);
//     }
//     var liMent = document.createElement('li');
//     liMent.textContent = 'TOTALS ' + this.grandTotal;
//     ulEl.appendChild(liMent);
//     pEl.appendChild(ulEl);
//
//   }
// };
//
// // Southcenter Store Object
// var southCenterStore = {
//   storeName: 'South Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 1.9,
//   totals: [],
//   grandTotal: 0,
//
//   getRandom: function(min, max) {
//     return Math.random() * (max - min) + min;
//   },
//
//   hourTotal: function(arr, total, avg, rand, hour) {
//     console.log(total);
//     for(var j = 0; j < hour.length; j++) {
//       var ran = Math.floor(rand(this.minCust, this.maxCust) * avg);
//       arr.push(ran);
//       console.log(total, ran, this.grandTotal);
//       total += ran;
//     }
//     return total;
//   },
//
//   render: function() {
//     this.grandTotal = this.hourTotal(this.totals, this.grandTotal, this.avgCookie, this.getRandom, hours);
//     var pEl = document.getElementById('southCtrStore');
//     var ulEl = document.createElement('ul');
//     pEl.textContent = this.storeName;
//
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.totals[i];
//       ulEl.appendChild(liEl);
//     }
//     var liMent = document.createElement('li');
//     liMent.textContent = 'TOTALS ' + this.grandTotal;
//     ulEl.appendChild(liMent);
//     pEl.appendChild(ulEl);
//
//   }
// };
//
// // Bellevue Square Store Object
// var bellevueSqStore = {
//   storeName: 'Bellevue Square',
//   minCust: 20,
//   maxCust: 48,
//   avgCookie: 3.3,
//   totals: [],
//   grandTotal: 0,
//
//   getRandom: function(min, max) {
//     return Math.random() * (max - min) + min;
//   },
//
//   hourTotal: function(arr, total, avg, rand, hour) {
//     console.log(total);
//     for(var j = 0; j < hour.length; j++) {
//       var ran = Math.floor(rand(this.minCust, this.maxCust) * avg);
//       arr.push(ran);
//       console.log(total, ran, this.grandTotal);
//       total += ran;
//     }
//     return total;
//   },
//
//   render: function() {
//     this.grandTotal = this.hourTotal(this.totals, this.grandTotal, this.avgCookie, this.getRandom, hours);
//     var pEl = document.getElementById('bellSqStore');
//     var ulEl = document.createElement('ul');
//     pEl.textContent = this.storeName;
//
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.totals[i];
//       ulEl.appendChild(liEl);
//     }
//     var liMent = document.createElement('li');
//     liMent.textContent = 'TOTALS ' + this.grandTotal;
//     ulEl.appendChild(liMent);
//     pEl.appendChild(ulEl);
//
//   }
// };
//
// // Alki Store Object
// var alkiStore = {
//   storeName: 'Alki',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 2.6,
//   totals: [],
//   grandTotal: 0,
//
//   getRandom: function(min, max) {
//     return Math.random() * (max - min) + min;
//   },
//
//   hourTotal: function(arr, total, avg, rand, hour) {
//     console.log(total);
//     for(var j = 0; j < hour.length; j++) {
//       var ran = Math.floor(rand(this.minCust, this.maxCust) * avg);
//       arr.push(ran);
//       console.log(total, ran, this.grandTotal);
//       total += ran;
//     }
//     return total;
//   },
//
//   render: function() {
//     this.grandTotal = this.hourTotal(this.totals, this.grandTotal, this.avgCookie, this.getRandom, hours);
//     var pEl = document.getElementById('alki_Store');
//     var ulEl = document.createElement('ul');
//     pEl.textContent = this.storeName;
//
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.totals[i];
//       ulEl.appendChild(liEl);
//     }
//     var liMent = document.createElement('li');
//     liMent.textContent = 'TOTALS ' + this.grandTotal;
//     ulEl.appendChild(liMent);
//     pEl.appendChild(ulEl);
//
//   }
// };
//
