function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  arr.forEach(function(obj) {

    obj.orbitalPeriod = Math.round((2 * Math.PI) * Math.sqrt((Math.pow(obj.avgAlt + earthRadius, 3)/GM)));
    
    delete obj.avgAlt;

  });
  
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
