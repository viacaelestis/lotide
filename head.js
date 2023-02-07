const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  }  else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  return array[array.length - 1];
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);