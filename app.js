var pikeStore = {
  storeName: "Pike Place",
  minCust: 17,
  maxCust: 88,
  avgCookie: 5.2,
  totals: [],
  hours: [
    "10am: ",
    "11am: ",
    "12pm: ",
    "1pm: ",
    "2pm: ",
    "3pm: ",
    "4pm: ",
    "5pm: ",
    "6pm: "
],

  getRandom: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  hourTotal: function() {
  for(var j = 0; j < this.hours.length; j++)
    var ran = this.getRandom * this.avgCookie;
    this.totals.push(ran);
  },

  render: function() {
  var pEl = document.getElementById("store_one");
  var ulEl = document.createElement('ul');

  for (var i = 0; i < this.hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = this.hours[i];
    ulEl.appendChild(liEl);
  }
  pEl.appendChild(ulEl);
  }
};


pikeStore.getRandom(17, 88);
pikeStore.hourTotal();
pikeStore.render();
