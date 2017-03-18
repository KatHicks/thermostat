describe('Features', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // thermostat starts at 20 degrees

  it('should start at 20 degrees', function() {
    expect(thermostat.getDegrees()).toEqual(20);
  });

  // you can increase the temperature with an up function

  it('should increase temperature with an up function', function(){
    thermostat.up(3);
    expect(thermostat.getDegrees()).toEqual(23);
  });

  // you can decrease the temperature with a down function

  it('should decrease temperature with a down function', function(){
    thermostat.down(3);
    expect(thermostat.getDegrees()).toEqual(17);
  });

  // the minimum temperature is 10 degrees

  it("should have a minimum temperature of 10 degrees", function(){
    expect( function(){ thermostat.down(11); } ).toThrow('You cannot change temperature as minimum temperature is 10 degrees');
  });

  // if power saving mode is on, the maximum temperature is 25 degrees

  it("should have a max temp of 25 degrees if power saving mode is on", function(){
    expect( function(){ thermostat.up(6); } ).toThrow('You cannot change temperature as maximum temperature has been reached');
  });

  // if power saving mode is off, the maximum temperature is 32 degrees

  it("should have a max temp of 32 degrees if power saving mode is off", function(){
    thermostat.switchPowerSaving();
    expect( function(){ thermostat.up(13); } ).toThrow('You cannot change temperature as maximum temperature has been reached');
  });

  // power saving mode is on by default

  it("Power saving mode is on by default", function(){
    expect(thermostat._powerSaving).toBe(true);
  });

  // you can reset the temperature to 20 with a reset function

  it("You can reset the temperature to 20 with a reset function", function(){
    thermostat.up(3);
    thermostat.reset();
    expect(thermostat.getDegrees()).toEqual(20);
  });

  // you can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

  it('should display a energey usage message', function(){
    expect(thermostat.seeEnergyUsage()).toEqual('medium-usage');

    thermostat.up(5);
    expect(thermostat.seeEnergyUsage()).toEqual('high-usage');

    thermostat.down(8);
    expect(thermostat.seeEnergyUsage()).toEqual('low-usage');
  });

});
