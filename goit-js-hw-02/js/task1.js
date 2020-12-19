const getItemsString = function (array) {
  'use strict';
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(`${i + 1} - ${array[i]}\n`);
  }
  return result.join('');
};
​
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));