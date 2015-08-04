var comp = function(a,b) { //Function to find the complement between two arrays, taken as arguments.
  return a.filter(function(elem) { 
  return b.indexOf(elem) < 0;
  });
};

function sym(args) {
  console.log(arguments);
  var arg = [].slice.call(arguments);
  console.log(arg);
  
  return arg.map(function(a) { 
    return a.filter(function(elem, pos) { 
      return a.indexOf(elem) == pos; 
    }); 
  })
  .reduce(function(prev, curr) {
      return comp(prev, curr).concat(comp(curr, prev));
  });
}

sym([1, 2, 3], [5, 2, 1, 4]);