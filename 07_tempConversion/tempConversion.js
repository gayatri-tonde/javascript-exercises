const convertToCelsius = function(fahrenheit) {
  let cel=(fahrenheit - 32) * 5 / 9;
  if (cel % 1 !== 0) {
    cel = cel.toFixed(1);
  }
  return parseFloat(cel);

};

const convertToFahrenheit = function(cel) {
  let fah=(cel * 9 / 5) + 32;
  if (fah % 1 !== 0) {
    fah = fah.toFixed(1);
  }
  return parseFloat(fah);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
