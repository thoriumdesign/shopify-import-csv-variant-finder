function matchesVariantPattern(sku) {
  if ( /[bmBM]+$/.test(sku) ) return false
  if ( !/[0-9]/.test(sku) ) return false
  if ( /-/.test(sku) || /[a-zA-Z]+$/.test(sku) ) return true
  return false
}

module.exports = {matchesVariantPattern}