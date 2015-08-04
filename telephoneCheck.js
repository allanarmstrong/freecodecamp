function telephoneCheck(str) {
  var regexp = /([1]?)(-?|\s?)\(?[0-9]{3}\)?(-?|\s?)[0-9]{3}(-?|\s?)[0-9]{4}/g;
  
  return regexp.test(str);
}



telephoneCheck("555-555-5555");