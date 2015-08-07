var permArr = [],
usedChars = [];

//Function gets all the permutations of a sequence of letters.
function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length === 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr;
}

function permAlone(str) {
  var noRepeats = [];
  var arr = str.split('');
  
  var perms = permute(arr);  
  perms = perms.map(function(a) {
   return a.join('');
  }).filter(function(str) {
    return !/(\w)\1+/g.test(str);
  });
  
  return perms.length;
}