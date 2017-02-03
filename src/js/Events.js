$( document ).ready(function() {
    var thermostat = new Thermostat();
    changeValue(20);

    if (thermostat.seeEnergyUsage === 'low-usage') {
      $( "#progress-bar" ).css()
    }

    function changeValue(num) {
      $( "#progress-bar" ).attr('value', num);
      $( "#temp-display" ).text(num);
    }

    $( "#temp-up" ).click(function() {
      thermostat.up(1);
      changeValue(thermostat.getDegrees());
    });

    $( "#temp-down" ).click(function() {
      thermostat.down(1);
      changeValue(thermostat.getDegrees());
    });

    $( "#temp-reset" ).click(function() {
      thermostat.reset();
      changeValue(thermostat.getDegrees());
    });

    $( "#switch-mode" ).click(function() {
      thermostat.switchPowerSaving();
      if ((thermostat.getDegrees() > 25) && thermostat.getInPoweringSaving()) {
        thermostat.up(1);
        changeValue(thermostat.getDegrees());
      }
    });
});
