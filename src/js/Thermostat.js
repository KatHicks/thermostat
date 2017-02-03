'use strict';

function Thermostat() {
  this._degrees = 20;
  this._powerSaving = true;

  this._MIN_TEMP = 10;
  this._MAX_TEMP_SAVINGS = 25;
  this._MAX_TEMP_FULL = 32;
  this._DEFAULT_TEMP = 20;
  this._MEDIUM_USAGE_LIMIT = 25;
  this._LOW_USAGE_LIMIT = 18;
}


// PUBLIC

Thermostat.prototype.getDegrees = function() {
  return this._degrees;
};

Thermostat.prototype.getInPoweringSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.switchPowerSaving = function() {
  this._powerSaving = !(this._powerSaving);
};

Thermostat.prototype.up = function(number) {
  this._setDegrees(this.getDegrees() + number);
};

Thermostat.prototype.down = function(number) {
  this._setDegrees(this.getDegrees() + number);
};

Thermostat.prototype.reset = function() {
  this._setDegrees(this._DEFAULT_TEMP);
};

Thermostat.prototype.seeEnergyUsage = function() {
  if (this.getDegrees() < this._LOW_USAGE_LIMIT) {
    return 'low-usage';
  } else if (this.getDegrees() < this._MEDIUM_USAGE_LIMIT) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};

// PRIVATE
Thermostat.prototype._check = function(number) {
  if (number < this._MIN_TEMP) {throw 'You cannot change temperature as minimum temperature is 10 degrees'}
  if (number > this._getMaxTemp()) { throw 'You cannot change temperature as maximum temperature is 25 degrees when power saving is on'}
};

Thermostat.prototype._setDegrees = function(number) {
  this._check(number);
  this._degrees = number;
};

Thermostat.prototype._getMaxTemp = function() {
  return (this._powerSaving) ? this._MAX_TEMP_SAVINGS : this._MAX_TEMP_FULL;
};
