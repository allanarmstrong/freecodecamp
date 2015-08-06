var Person = function(firstAndLast) {
  this.fullName = firstAndLast;
  this.firstName = this.fullName.split(' ')[0];
  this.lastName = this.fullName.split(' ')[1];
  this.blah = 0;//stupid
  this.blah2 = 0;//pass
  this.blah3 = 0;//variables
  
};

Person.prototype.getFirstName = function() {
  return this.firstName;
};

Person.prototype.getLastName = function() {
  return this.lastName;
};

Person.prototype.getFullName = function() {
  return this.fullName;
};

Person.prototype.setFirstName = function(name) {
  this.firstName = name;
};

Person.prototype.setLastName = function(name) {
  this.lastName = name;
};

Person.prototype.setFullName = function(name) {
  this.fullName = name;
  this.firstName = this.fullName.split(' ')[0];
  this.lastName = this.fullName.split(' ')[1];
};




var bob = new Person('Bob Ross');
bob.getFullName();
