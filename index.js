const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 31;

batteryBatches.reduce(function (array, value) {
  return array + value;
});
