const convertToCelsius = function(fromF) {
  return Math.round((fromF-32)*(5/9)*10)/10;
};

const convertToFahrenheit = function(fromC) {
  return Math.round((fromC*(9/5)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
