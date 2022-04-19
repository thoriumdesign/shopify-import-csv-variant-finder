const {checkForDashes} = require('./checkForDashes')

function checkForLetters(sku, base_sku) {
  if (!base_sku) return false
  if (typeof base_sku !== 'string') return false

  const stopWithTheseLetters = /[bmBM]+$/.exec(base_sku)
  if (stopWithTheseLetters) return false

  const regexCheck = /[a-zA-Z]+$/.exec(base_sku)
  if (!regexCheck) return false
  if ( checkForDashes(sku, base_sku) ) return true
  return (sku == base_sku.slice(0, -regexCheck[0].length))
}

module.exports = {checkForLetters}