'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
    let restDeci = 0;
    for (let i = 0; i < num.length; i++) {
      restDeci += num[i] * 2 ** (num.length - 1 - i);
    }
    return restDeci;
}


function DecimalABinario(num) {
  // tu codigo aca
  let arr = []
  while (num !== 0) {
    arr.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return arr.join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}