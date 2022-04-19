function matchesVariantPattern(sku) {
  // console.log("matchesVariantPattern sku", sku)
  if ( !/[0-9]/.test(sku) ) return false
  if ( /-/.test(sku) || /[a-zA-Z]+$/.test(sku) ) return true
  return false
}

module.exports = {matchesVariantPattern}