'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should have a property for degrees', function() {
    expect(thermostat._degrees).toBeDefined();
  });

  it('should have a property for power saving', function() {
    expect(thermostat._powerSaving).toBeDefined();
  })

  describe('#getDegrees', function() {
    it('should have a function getDegrees', function() {
      expect(thermostat.getDegrees()).toEqual(20);
    });
  });

  // describe('#switchPowerSaving', function() {
  //   it('should have a function switchPowerSaving', function() {
  //     thermostat.switchPowerSaving();
  //     expect(thermostat._powerSaving).toEqual(false);
  //   });
  // });

  describe("#up", function(){
    it('should increase temperature with an up function', function(){
      thermostat.up(3);
      expect(thermostat.getDegrees()).toEqual(23);
    });

    it('should have a limit of 25 degrees with power saving on', function(){
      thermostat.up(6);
      expect(thermostat.getDegrees()).toEqual(25);
    });
    // 
    // it("should have a limit of 32 degrees with power saving off", function(){
    //   thermostat.switchPowerSaving();
    //   thermostat.up(13);
    //   expect(thermostat.getDegrees()).toEqual(32);
    // });
  });

  describe("#down", function(){
    it('should decrease temperature with a down function', function(){
      thermostat.down(3);
      expect(thermostat.getDegrees()).toEqual(17);
    });

    it("should have a minimum temperature of 10 degrees", function(){
      thermostat.down(11);
      expect(thermostat.getDegrees()).toEqual(10);
    });
  });

  describe("#reset", function(){
    it("You can reset the temperature to 20 with a reset function", function(){
      thermostat.up(3);
      thermostat.reset();
      expect(thermostat.getDegrees()).toEqual(20);
    });
  });

  describe("#seeEnergyUsage", function(){
    it("should display a energey usage message", function(){
      expect(thermostat.seeEnergyUsage()).toEqual('medium-usage');

      thermostat.up(5);
      expect(thermostat.seeEnergyUsage()).toEqual('high-usage');

      thermostat.down(8);
      expect(thermostat.seeEnergyUsage()).toEqual('low-usage');
    });
  });

});
