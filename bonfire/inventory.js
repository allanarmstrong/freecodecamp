//A hacked together "indexOf" for a multidimensional (2d) array.
//Returns the higher order index of "item"
function isInArray(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] == item) {
      return i;
    }
  }
  return -1;
}

function inventory(arr1, arr2) {
  
  for (var i = 0; i < arr2.length; i++) { //Loop through the second array because that's the stuff we want to add to the current inventory.
    inArray = isInArray(arr1, arr2[i][1]); //see if the item exists in the current inventory
    if (inArray > -1) {
      arr1[inArray][0] += arr2[i][0]; //Add the new inventory to the currenty inventory
    } else {
      arr1.push(arr2[i]); //If the item doesn't exist just push it to the current inventory. Don't worry about alphabetical sorting yet.
    }
  }
  //Now sort the array in alphabetical order because that's what we want!
  arr1 = arr1.sort(function(a,b) {
    if (a[1] < b[1])
      return -1;
    else
      return 1;
    return 0;
  });
  
  return arr1; //Return the current inventory all updated :)
  
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);